import { z } from 'zod';

export const paginationSchema = z.object({
  page: z
    .string()
    .optional()
    .default('1')
    .transform((v) => parseInt(v))
    .refine((v) => !Number.isNaN(v), {
      message: 'Page must be a number',
    }),
  limit: z
    .string()
    .optional()
    .default('10')
    .transform((v) => parseInt(v))
    .refine((v) => !Number.isNaN(v), {
      message: 'Limit must be a number',
    }),
});
