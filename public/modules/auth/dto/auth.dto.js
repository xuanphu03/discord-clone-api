"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordDto = exports.signUpDto = exports.signInDto = exports.forgotPasswordDto = void 0;
const zod_1 = require("zod");
exports.forgotPasswordDto = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is required',
    })
        .email('Email is not valid. Please provide a valid email address.'),
});
exports.signInDto = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is required',
    })
        .email('Email is not valid. Please provide a valid email address.'),
    password: zod_1.z
        .string({
        required_error: 'Password is required',
    })
        .min(6, 'Password must be at least 6 characters long'),
});
exports.signUpDto = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is required',
    })
        .email('Email is not valid. Please provide a valid email address.'),
    password: zod_1.z
        .string({
        required_error: 'Password is required',
    })
        .min(6, 'Password must be at least 6 characters long'),
    username: zod_1.z.string({
        required_error: 'Username is required',
    }),
});
exports.resetPasswordDto = zod_1.z.object({
    password: zod_1.z
        .string({
        required_error: 'Password is required',
    })
        .min(6, 'Password must be at least 6 characters long'),
});
//# sourceMappingURL=auth.dto.js.map