import { z } from 'zod';

export const upsertCategoryDto = z.object({
  name: z.string().min(1, 'Name is required'),
  isPrivate: z.boolean().default(false),
});
