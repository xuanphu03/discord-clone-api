import jwt from 'jsonwebtoken';
import { UnauthorizedException } from '@/utils/exceptions';
import { Context, Next } from 'hono';
import { db } from '@/lib/db';
import { JWT_SECRET } from '@/utils/constants';

export const verifyToken = async (token: string) => {
  try {
    const data = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await db.user.findUnique({
      where: {
        id: data.userId,
      },
    });
    return user;
  } catch (err) {
    throw new UnauthorizedException('Unauthorized');
  }
};

export const auth = async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization');
  const token = authHeader?.split(' ')[1];
  if (!token) {
    throw new UnauthorizedException('Unauthorized');
  }
  const user = await verifyToken(token);
  
  c.set('user', user);
  
  await next();
};