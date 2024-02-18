import { db } from '@/lib/db';
import { UnauthorizedException } from '@/utils/exceptions';
import { hashPassword } from '@/utils/password';
import * as bcrypt from 'bcrypt';

export class AuthService {
  static async signIn(email: string, password: string) {
    const user = await db.user.findUnique({
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
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new UnauthorizedException(`Email ${email} already exists`);
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
  }
}
