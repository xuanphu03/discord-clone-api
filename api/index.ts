import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';
// import { cors } from 'hono/cors';
// import { logger } from 'hono/logger';
import { router as authRouter } from '../src/modules/auth/auth.controller';
import { router as orgsRouter } from '../src/modules/orgs/orgs.controller';
import { errorFilter } from '../src/middlewares/error-fillters';
import { auth } from '../src/middlewares/auth';

const app = new Hono().basePath('/api');

// app.use('*', logger());
// app.use(
//   '*',
//   cors({
//     origin: ['http://localhost:5173', 'https://discord-web-clone.vercel.app'],
//     credentials: true,
//   })
// );

app.route('/', authRouter);
app.all('*', auth).route('/orgs', orgsRouter);

app.notFound((c) => c.json({ status: 404, message: 'Not found' }, 404));

app.onError(errorFilter);

export default handle(app);
