"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationSchema = void 0;
const zod_1 = require("zod");
exports.paginationSchema = zod_1.z.object({
    page: zod_1.z
        .string()
        .optional()
        .default('1')
        .transform((v) => parseInt(v))
        .refine((v) => !Number.isNaN(v), {
        message: 'Page must be a number',
    }),
    limit: zod_1.z
        .string()
        .optional()
        .default('10')
        .transform((v) => parseInt(v))
        .refine((v) => !Number.isNaN(v), {
        message: 'Limit must be a number',
    }),
});
//# sourceMappingURL=schema.js.map