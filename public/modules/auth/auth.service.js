"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const db_1 = require("@/lib/db");
const exceptions_1 = require("@/utils/exceptions");
const password_1 = require("@/utils/password");
const bcrypt = __importStar(require("bcrypt"));
class AuthService {
    static async signIn(email, password) {
        const user = await db_1.db.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            throw new Error(`Email ${email} not found`);
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid password');
        }
        return '124';
    }
    static async signUp(email, password) {
        const user = await db_1.db.user.findUnique({
            where: {
                email: email,
            },
        });
        if (user) {
            throw new exceptions_1.UnauthorizedException(`Email ${email} already exists`);
        }
        const salt = bcrypt.genSaltSync();
        const hashedPassword = await (0, password_1.hashPassword)(password, salt);
        const newUser = await db_1.db.user.create({
            data: {
                email: email,
                password: hashedPassword,
                salt: salt,
            },
        });
        return newUser;
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map