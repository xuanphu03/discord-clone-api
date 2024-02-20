import { Hono } from 'hono';
// import { zValidator } from '@hono/zod-validator';
import { AuthService } from './auth.service';
import { auth } from '@/middlewares/auth';
export const router = new Hono();

router
  .post('/sign-in', async (c) => {
    const { email, password } = await c.req.json();
    const data = await AuthService.signIn(email, password);
    return c.json(data, 200);
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
