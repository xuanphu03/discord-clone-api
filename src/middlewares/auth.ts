import jwt from 'jsonwebtoken';
import { UnauthorizedException } from '@/utils/exceptions';
import { Context, Next } from 'hono';
import { db } from '@/lib/db';
import { JWT_SECRET } from '@/utils/constants';

export const auth = async (c: Context, next: Next) => {
  try {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
      throw new UnauthorizedException('Unauthorized');
    }

    const jwtObject = jwt.decode(authHeader);

    await next()
  } catch (error) {
    throw new UnauthorizedException("Unauthorized")
  }
};
