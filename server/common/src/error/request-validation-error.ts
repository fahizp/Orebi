import { CustomError } from "./custom-error";
import { ValidationError, FieldValidationError, AlternativeValidationError, GroupedAlternativeValidationError, UnknownFieldsError } from "express-validator";


interface CustomValidationError {
    param?: string;
    msg?: string;
}
type CustomValidationErrors = CustomValidationError | FieldValidationError | AlternativeValidationError | GroupedAlternativeValidationError | UnknownFieldsError;

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: CustomValidationError[]) {
    super("DB Error");
  }

  serializeErrors(): { message: string; field?: string }[] {
    return this.errors.map((err) => ({
      message: err.msg || "Validation error",
      field: err.param,
    }));
  }
  
}
