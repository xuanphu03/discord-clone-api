export declare class NotFoundException extends Error {
    constructor(message: string);
}
export declare class BadRequestException extends Error {
    constructor(message: string);
}
export declare class UnauthorizedException extends Error {
    constructor(message: string);
}
export declare class ForbiddenException extends Error {
    constructor(message: string);
}
export declare class ConflictException extends Error {
    constructor(message: string);
}
export type HTTPExceptionOptions = {
    res?: Response;
    message?: string;
};
