"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const exceptions_1 = require("@/utils/exceptions");
const db_1 = require("@/lib/db");
const constants_1 = require("@/utils/constants");
const verifyToken = async (token) => {
    try {
        const data = jsonwebtoken_1.default.verify(token, constants_1.JWT_SECRET);
        const user = await db_1.db.user.findUnique({
            where: {
                id: data.userId,
            },
        });
        return user;
    }
    catch (err) {
        throw new exceptions_1.UnauthorizedException('Unauthorized');
    }
};
exports.verifyToken = verifyToken;
const auth = async (c, next) => {
    const authHeader = c.req.header('Authorization');
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
    if (!token) {
        throw new exceptions_1.UnauthorizedException('Unauthorized');
    }
    const user = await (0, exports.verifyToken)(token);
    if (!user.isVerified) {
        throw new exceptions_1.UnauthorizedException('User is not verified');
    }
    c.set('user', user);
    await next();
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map