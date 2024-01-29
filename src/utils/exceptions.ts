export class NotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.status = 404;
    this.message = message;
  }
}

export class BadRequestException extends Error {
  constructor(message: string) {
    super(message);
    this.status = 400;
    this.message = message;
  }
}

export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.status = 401;
    this.message = message;
  }
}

export class ForbiddenException extends Error {
  constructor(message: string) {
    super(message);
    this.status = 403;
    this.message = message;
  }
}

export class ConflictException extends Error {
  constructor(message: string) {
    super(message);
    this.status = 409;
    this.message = message;
  }
}

export type HTTPExceptionOptions = {
  res?: Response;
  message?: string;
};
