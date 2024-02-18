import { db } from '@/lib/db';
import { Hono } from 'hono';
// import { zValidator } from '@hono/zod-validator';
import { AuthService } from './auth.service';
// import { signUpDto, signInDto, forgotPasswordDto, resetPasswordDto } from './dto/auth.dto';
// import { auth, verifyToken } from '@/middlewares/auth';
// import { UnauthorizedException } from '@/utils/exceptions';
// import { WEB_URL } from '@/utils/constants';

export const router = new Hono();

router
  .post('/sign-in', async (c) => {
    const { email, password } = await c.req.json();

    const token = await AuthService.signIn(email, password);
    
    return c.json({ token }, 200);
  })
  .post('/sign-up', async (c) => {
    const { email, password } = await c.req.json();

    await AuthService.signUp(email, password);

    return c.json(
      {
        message:
          'Sign up successfully. Please check your email to verify your account.',
      },
      201
    );
  });
