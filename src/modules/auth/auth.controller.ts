import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { AuthService } from './auth.service';
import { forgotPasswordDto, signInDto, signUpDto } from './dto/auth.dto';
export const router = new Hono();

router
  .post('/sign-in', zValidator('json', signInDto), async (c) => {
    const { email, password } = await c.req.json();
    const data = await AuthService.signIn(email, password);
    return c.json(data, 200);
  })
  .post('/sign-up', zValidator('json', signUpDto), async (c) => {
    const { email, password } = await c.req.json();

    await AuthService.signUp(email, password);

    return c.json(
      {
        message:
          'Sign up successfully. Please check your email to verify your account.',
      },
      201
    );
  })
  .post('/forgot-password',zValidator('json', forgotPasswordDto), async (c) => {
    const { email } = await c.req.json();

    await AuthService.forgotPassword(email);

    return c.json(
      {
        message:
          'We have sent a password reset link to your email. Please check your mail.',
      },
      201
    );
  });
