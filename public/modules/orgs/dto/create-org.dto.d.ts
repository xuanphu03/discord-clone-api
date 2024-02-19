import { z } from 'zod';
export declare const createOrgDto: z.ZodObject<{
    name: z.ZodString;
    icon: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    icon?: string;
}, {
    name?: string;
    icon?: string;
}>;
