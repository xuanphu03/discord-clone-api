import { Context, Next } from 'hono';
export declare const verifyToken: (token: string) => Promise<{
    id: string;
    email: string;
    password: string;
    salt: string;
}>;
export declare const auth: (c: Context, next: Next) => Promise<void>;
