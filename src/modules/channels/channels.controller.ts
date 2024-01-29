import { Hono } from 'hono';
import { ChannelsService } from './channels.service';
import { upsertChannelDto } from './dto/channel.dto';
import { zValidator } from '@hono/zod-validator';

export const router = new Hono();

router
  .get('/:channelId', async (c) => {
    const channelId = c.req.param('channelId');
    const channel = await ChannelsService.getBy(channelId);

    return c.json({
      data: channel,
      status: 200,
    });
  })
  .delete('/:channelId', async (c) => {
    const channelId = c.req.param('channelId');
    await ChannelsService.delete(channelId);

    return c.json({
      status: 200,
      message: 'Channel deleted successfully',
    });
  })
  .put('/:channelId', zValidator('json', upsertChannelDto), async (c) => {
    const channelId = c.req.param('channelId');
    const updateChannelDto = await c.req.json();
    const updatedChannel = await ChannelsService.update(channelId, updateChannelDto);

    return c.json({
      data: updatedChannel,
      status: 200,
    });
  })
  .put('/:channelId/members/:memberId', async (c) => {
    const channelId = c.req.param('channelId');
    const memberId = c.req.param('memberId');

    const updatedChannel = await ChannelsService.addMember(channelId, memberId);

    return c.json({
      data: updatedChannel,
      status: 200,
    });
  });
