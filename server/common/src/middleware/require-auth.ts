import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../error/not-authorized-error";
import { UserPayload } from "./ProductedRoutes";

/**
 * Middleware function to check if the user is authenticated.
 * If not, throws NotAuthorizedError. Otherwise, calls the next middleware function.
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Checking authentication...");
  const currentUser = req.currentUser as UserPayload | undefined;

  if (!currentUser) {
    console.log('User not authenticated.');
    throw new NotAuthorizedError();
  }

  console.log(`User ${currentUser.email} authenticated.`);
  next();
};
