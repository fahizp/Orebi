import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode: number = 500;
  reason: string = "ERROR in database connection";

  constructor() {
    super("Invalid request parameters");
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
