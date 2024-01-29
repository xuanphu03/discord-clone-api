import { Context } from 'hono';

export const errorFilter = async (error: Error, c: Context) => {
  const status = error.status ?? 500;

  return c.json(
    {
      status,
      message: error.message ?? 'Something went wrong',
    },
    status
  );
};
