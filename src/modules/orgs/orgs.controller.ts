import { Hono } from "hono";
import { OrgsService } from "./orgs.service";

export const router = new Hono();

router
  .get('/:orgId', async (c) => {
    const orgId = c.req.param('orgId');

    const org = await OrgsService.getBy(orgId);

    return c.json({
      data: org,
      status: 200,
    });
  })
  .post('/', async (c) => {
    const user = c.get('user');

    const { name, icon } = await c.req.json();

    const org = await OrgsService.create({
      userId: user.id,
      name,
      icon,
    });

    return c.json(org);
  });