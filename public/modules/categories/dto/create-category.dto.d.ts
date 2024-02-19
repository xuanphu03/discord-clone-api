import { z } from 'zod';
export declare const upsertCategoryDto: z.ZodObject<{
    name: z.ZodString;
    isPrivate: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    isPrivate?: boolean;
}, {
    name?: string;
    isPrivate?: boolean;
}>;
