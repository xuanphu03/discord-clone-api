import { Context } from 'hono';

export const errorFilter = async (error: Error, c: Context) => {
  const status = error.status ?? 500;
  const message = error.message ?? 'Something went wrong';

  return c.json(
    {
      status,
      message
    },
    status
  );
};
