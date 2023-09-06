export class CommonResponse<T> {
  status: boolean;
  error?: ResponseError;
  content?: T;

  constructor(status: boolean, content?: T, error?: ResponseError) {
    this.status = status;
    this.content = content;
    this.error = error;
  }
}
export class ResponseError {
  status: number;
  msg: string;
  reason: string;
  url: string;
  ip: string;
  validationErrors?: ValidationError[];

  constructor({
    status,
    msg,
    reason,
    url,
    ip,
    validationErrors = [],
  }: {
    status: number;
    msg: string;
    reason: string;
    url: string;
    ip: string;
    validationErrors?: ValidationError[];
  }) {
    this.status = status;
    this.msg = msg;
    this.reason = reason;
    this.url = url;
    this.ip = ip;
    this.validationErrors = validationErrors;
  }
}

export class ValidationError {
  field: string;
  msg: string;

  constructor(field: string, msg: string) {
    this.field = field;
    this.msg = msg;
  }
}
