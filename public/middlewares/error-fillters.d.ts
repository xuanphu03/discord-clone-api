import { Context } from 'hono';
export declare const errorFilter: (error: Error, c: Context) => Promise<Response & import("hono").TypedResponse<{
    status: number;
    message: string;
}>>;
