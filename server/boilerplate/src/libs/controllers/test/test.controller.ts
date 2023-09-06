import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@ecom-microservie/common";

export default (dependencies: any): any => {
  const { useCases: { test_UseCase } } = dependencies;

  const testing = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data } = req.body;

      if (!data) throw new BadRequestError("Please provide a data");

      const test = await test_UseCase(dependencies).execute(req.body);

      if (!test) throw new BadRequestError("Something went wrong");

      res.json(test);
    } catch (error) {
      throw new Error(error)
    }
  };
  return testing
};
