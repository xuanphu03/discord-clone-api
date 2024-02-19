"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = exports.ForbiddenException = exports.UnauthorizedException = exports.BadRequestException = exports.NotFoundException = void 0;
class NotFoundException extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
        this.message = message;
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
        this.message = message;
    }
}
exports.BadRequestException = BadRequestException;
class UnauthorizedException extends Error {
    constructor(message) {
        super(message);
        this.status = 401;
        this.message = message;
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends Error {
    constructor(message) {
        super(message);
        this.status = 403;
        this.message = message;
    }
}
exports.ForbiddenException = ForbiddenException;
class ConflictException extends Error {
    constructor(message) {
        super(message);
        this.status = 409;
        this.message = message;
    }
}
exports.ConflictException = ConflictException;
//# sourceMappingURL=exceptions.js.map