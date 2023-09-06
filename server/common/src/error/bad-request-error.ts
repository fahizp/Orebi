import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode : number = 400;

  constructor(message: string) {
    super(message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
