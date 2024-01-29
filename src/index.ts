import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { logger } from 'hono/logger';
// import { router as authRouter } from './modules/auth/auth.controller';
import { router as orgsRouter } from './modules/orgs/orgs.controller';
import { router as usersRouter } from './modules/users/users.controller';
import { router as channelsRouter } from './modules/channels/channels.controller';
import { router as categoriesRouter } from './modules/categories/categories.controller';
import { auth } from './middlewares/auth';
import { errorFilter } from './middlewares/error-fillters';

const app = new Hono().basePath('/api');

app.use('*', logger());
app.use(
  '*',
  cors({
    origin: ['http://localhost:5173', 'https://discord-web-clone.vercel.app'],
    credentials: true,
  })
);
// app.route('/', authRouter);

app.get('/orgs/:orgID/:channelID/members', c => c.json([
  {
    id: 1,
    displayName: 'Shin',
    userName: 'shinosuke123',
    avatar: 'https://th.bing.com/th/id/OIP.GS0ptM4PYsIKvcRmTCoOTgHaEF?w=309&h=180&c=7&r=0&o=5&pid=1.7',
    backgroundColor: '#2fffff',
    roles: ['Học viên'],
    category: {
      id: 1,
      name: 'Đà Nẵng',
    },
  },
  {
    id: 2,
    displayName: 'XunaFu',
    userName: 'kuma.xp03',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
    backgroundColor: '#2faf9f',
    roles: ['Admin', 'F0'],
    category: {
      id: 1,
      name: 'Đà Nẵng',
    },
  },
  {
    id: 3,
    displayName: 'Xuna',
    userName: 'Xunafudev',
    avatar: 'https://th.bing.com/th/id/OIP.GS0ptM4PYsIKvcRmTCoOTgHaEF?w=309&h=180&c=7&r=0&o=5&pid=1.7',
    backgroundColor: '#56d6fd',
    roles: ['Học viên'],
    category: {
      id: 1,
      name: 'Đà Nẵng',
    },
  },
  {
    id: 4,
    displayName: 'Bitay',
    userName: 'trantin03',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
    backgroundColor: '#56d6fd',
    roles: ['Học viên'],
    category: {
      id: 2,
      name: 'Game',
    },
  },
  {
    id: 5,
    displayName: 'ShibaInu',
    userName: 'akaimaru',
    avatar:
      'https://th.bing.com/th?q=HSL-35&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=strict&t=1&mw=247',
    backgroundColor: 'red',
    roles: ['Học viên'],
    category: {
      id: 1,
      name: 'Đà Nẵng',
    },
  },
]));


// app.all('*', auth).route('/orgs', orgsRouter);
// app.all('*', auth).route('/users', usersRouter);
// app.all('*', auth).route('/channels', channelsRouter);
// app.all('*', auth).route('/categories', categoriesRouter);

app.notFound((c) => c.json({ status: 404, message: 'Not found' }, 404));

app.onError(errorFilter);

serve(app, () => {
  console.log('Server is running on http://localhost:3000');
});
