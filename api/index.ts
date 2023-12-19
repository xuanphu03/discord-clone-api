import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.use('*', logger());
app.use(
  '*',
  cors({
    origin: ['http://localhost:5173', 'https://discord-web-clone.vercel.app'],
    credentials: true,
  })
);

app.get('/', (c) => c.json({ message: 'Hello Hono!' }));

app.post('/sign-in', async (c) => {
  const { email, password } = await c.req.json();

  if (email === 'chuyennhagao@gmail.com' && password === 'Kumaisme1') {
    return c.json({ token: '1233121' });
  }
  return c.json({ error: 'Invalid email or password' }, 401);
});

app.post('/sign-up', (c) => c.json({ token: '3333121' }));

export default handle(app)
