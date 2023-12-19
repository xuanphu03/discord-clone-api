import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.get('/', (c) => c.json({ message: 'Hello Hono!' }));
app.post('/sign-in', (c) => c.json({ token: '1233121' }));
app.post('/sign-up', (c) => c.json({ token: '3333121' }));

export default handle(app)
