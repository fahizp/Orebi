import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;

  constructor() {
    super("Not authorized");
  }

  serializeErrors() {
    return [{ message: "Not authorized" }];
  }
}
