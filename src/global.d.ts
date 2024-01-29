import { user } from '@prisma/client';

declare global {
  interface Error {
    status?: number;
  }
}

declare module 'hono' {
  interface ContextVariableMap {
    user: User;
  }
}
