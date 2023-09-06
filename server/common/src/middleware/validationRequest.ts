import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';
import { RequestValidationError } from '../error/request-validation-error';

/**
 * Middleware that validates the request using express-validator and throws a RequestValidationError
 * if any validation errors occur.
 */
export const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors: ValidationError[] = validationResult(req).array();
  if (errors.length > 0) {
    throw new RequestValidationError(errors);
  }
  next();
};
