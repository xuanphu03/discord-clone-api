import { z } from 'zod';
export declare const upsertChannelDto: z.ZodObject<{
    name: z.ZodString;
    isPrivate: z.ZodBoolean;
    type: z.ZodNativeEnum<any>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    isPrivate?: boolean;
    type?: any;
}, {
    name?: string;
    isPrivate?: boolean;
    type?: any;
}>;
