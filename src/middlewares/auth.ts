import { JWT_SECRET } from "@/lib/config";
import { db } from "@/lib/db";
import { UnauthorizedException } from "@/utils/exceptions";
import { Context, Next } from "hono";
import jwt from "jsonwebtoken"

export const auth = async (c: Context, next: Next) => {
  try {
    const authHeader = c.req.header("Authorization");
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException("Unauthorized");
    }
    const data = jwt.verify(token, JWT_SECRET) as { userId: string };

    console.log(data)
    const user = await db.user.findUnique({
      where: {
        id: data.userId,
      }
    });

    c.set("user", user);
    
    await next();
  } catch (error) {
    throw new UnauthorizedException("Unauthorized");
  }
}