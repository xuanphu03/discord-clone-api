import { ChannelType } from '@prisma/client';
import { z } from 'zod';

export const upsertChannelDto = z.object({
  name: z.string().min(1, 'Name is required'),
  isPrivate: z.boolean(),
  type: z.nativeEnum(ChannelType),
});
