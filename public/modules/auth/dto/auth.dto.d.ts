import { z } from 'zod';
export declare const forgotPasswordDto: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
}, {
    email?: string;
}>;
export declare const signInDto: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
export declare const signUpDto: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
    username?: string;
}, {
    email?: string;
    password?: string;
    username?: string;
}>;
export declare const resetPasswordDto: z.ZodObject<{
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password?: string;
}, {
    password?: string;
}>;
