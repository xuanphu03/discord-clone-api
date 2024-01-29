import { Hono } from 'hono';

export const router = new Hono();

router.get('/me', async (c) => {
  const user = c.get('user');

  return c.json({
    data: user,
    status: 200,
  });
});
