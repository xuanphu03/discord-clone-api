import { z } from 'zod';
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string>, number, string>;
    limit: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, number, string>, number, string>;
}, "strip", z.ZodTypeAny, {
    page?: number;
    limit?: number;
}, {
    page?: string;
    limit?: string;
}>;
