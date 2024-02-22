import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { logger } from 'hono/logger';
import { handle } from 'hono/vercel';
import { router as authRouter } from './modules/auth/auth.controller';
import { router as orgsRouter } from './modules/orgs/orgs.controller';
import { errorFilter } from './middlewares/error-fillters';
import { auth } from './middlewares/auth';
import dotenv from 'dotenv';

dotenv.config();

const app = new Hono().basePath('/api');

app.use('*', logger());
app.use(
  '*',
  cors({
    origin: ['http://localhost:5173', 'https://discord-web-clone.vercel.app'],
    credentials: true,
  })
);

app.route('/', authRouter);
app.all('*', auth).route('/orgs', orgsRouter);

app.notFound((c) => c.json({ status: 404, message: 'Not found' }, 404));

app.onError(errorFilter);

serve(app, () => {
  console.log('Server is running on http://localhost:3000');
});

export default handle(app);