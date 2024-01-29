import { Hono } from 'hono';
import { CategoriesService } from './categories.service';
import { upsertCategoryDto } from './dto/create-category.dto';
import { zValidator } from '@hono/zod-validator';
import { upsertChannelDto } from '../channels/dto/channel.dto';
import { ChannelsService } from '../channels/channels.service';

export const router = new Hono();

router
  .post('/:categoryId/channels', zValidator('json', upsertChannelDto), async (c) => {
    const categoryId = c.req.param('categoryId');
    const createChanelInput = await c.req.json();
    const channel = await ChannelsService.createByCategory(categoryId, createChanelInput);

    return c.json({
      data: channel,
      status: 201,
    });
  })
  .put('/:categoryId', zValidator('json', upsertCategoryDto), async (c) => {
    const categoryId = c.req.param('categoryId');
    const updateCategoryInput = await c.req.json();
    const updatedCategory = await CategoriesService.update(categoryId, updateCategoryInput);

    return c.json({
      data: updatedCategory,
      status: 200,
    });
  })
  .delete('/:categoryId', async (c) => {
    const categoryId = c.req.param('categoryId');

    await CategoriesService.deleteBy(categoryId);

    return c.json({
      message: 'Category deleted successfully',
      status: 200,
    });
  });
