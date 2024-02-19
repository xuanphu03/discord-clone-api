import { db } from '@/lib/db';
import { BadRequestException, UnauthorizedException } from '@/utils/exceptions';
import { hashPassword } from '@/utils/password';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export class AuthService {
  static async signIn(email: string, password: string) {
    const user = await db.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error(`Email ${email} not found`);
    }

    //Check password user input with password in db
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error('Invalid password');
    }
    return '124';
  }

  static async signUp(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new BadRequestException("Email and password are required!");
      }

      const salt = bcrypt.genSaltSync();
      const hashedPassword = await hashPassword(password, salt);

      const newUser = await db.user.create({
        data: {
          email: email,
          password: hashedPassword,
          salt: salt,
        },
      });

      return newUser;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new UnauthorizedException(`User ${email} already exists`);
      } else {
        throw error;
      }
    }
  }
}
