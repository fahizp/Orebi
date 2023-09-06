import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../error/bad-request-error";
import jwt from 'jsonwebtoken';

export interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
      session?: {
        jwt: string;
      };
    }
  }
}
// Middleware to check if there is a current user logged in and add their details to the request object
export const currentUser = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Checking current user...");
  if (!req.session?.jwt) {
    console.log("No current user found.");
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as any;
    console.log(`Current user is ${payload.email}.`);
    req.currentUser = payload;
  } catch (error) {
    console.log(error);
  }

  next();
};

// Middleware to check if the current user is an admin
export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Checking if user is admin...");
  if (!req.currentUser || req.currentUser.email !== "admin@gmail.com") {
    throw new BadRequestError("You are not authorized to perform this action.");
  }

  console.log("User is an admin.");
  next();
};

// Middleware to check if the current user is the owner of a specific resource
export const isOwner = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Checking if user is the owner of this resource...");
  const { userId } = req.params;

  if (!req.currentUser || req.currentUser.id !== userId) {
    throw new BadRequestError("You are not authorized to perform this action.");
  }

  console.log("User is the owner of this resource.");
  next();
};
