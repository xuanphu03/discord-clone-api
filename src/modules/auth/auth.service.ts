import jwt from 'jsonwebtoken';
import { db } from '@/lib/db';
import { BadRequestException, UnauthorizedException } from '@/utils/exceptions';
import { hashPassword } from '@/utils/password';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JWT_SECRET } from '@/utils/constants';
import { mailService } from '@/lib/mail.service';

export const ACCESS_TOKEN_EXPIRE_IN = 60 * 60;
export class AuthService {
  static async signIn(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new UnauthorizedException(`Email ${email} not found`);
    }

    //Check password user input with password in db
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const accessToken = jwt.sign({ userId: user }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });

    return { accessToken };
  }

  static async signUp(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new BadRequestException('Email and password are required!');
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

  static createToken(userId: string) {
    return jwt.sign({ userId: userId }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }

  static async forgotPassword(email: string) {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new BadRequestException(`Email ${email} not found`);
    }

    const accessToken = this.createToken(user.id);

    await mailService.sendMail({
      to: email,
      html: `Click <a href="http://localhost:3000/auth/reset-password?token=${accessToken}">here</a> to reset your password`,
      subject: 'Reset your password',
    });
  }

  static async resetPassword(user: User, newPassword: string) {
    const isSamePassword = await bcrypt.compare(newPassword, user.password);

    if (isSamePassword) {
      throw new BadRequestException(
        'New password must be different from old password'
      );
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = await hashPassword(newPassword, salt);

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
        salt: salt,
      },
    });
  }
}
