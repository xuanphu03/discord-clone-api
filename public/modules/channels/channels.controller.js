"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
const channels_service_1 = require("./channels.service");
const channel_dto_1 = require("./dto/channel.dto");
const zod_validator_1 = require("@hono/zod-validator");
exports.router = new hono_1.Hono();
exports.router
    .get('/:channelId', async (c) => {
    const channelId = c.req.param('channelId');
    const channel = await channels_service_1.ChannelsService.getBy(channelId);
    return c.json({
        data: channel,
        status: 200,
    });
})
    .delete('/:channelId', async (c) => {
    const channelId = c.req.param('channelId');
    await channels_service_1.ChannelsService.delete(channelId);
    return c.json({
        status: 200,
        message: 'Channel deleted successfully',
    });
})
    .put('/:channelId', (0, zod_validator_1.zValidator)('json', channel_dto_1.upsertChannelDto), async (c) => {
    const channelId = c.req.param('channelId');
    const updateChannelDto = await c.req.json();
    const updatedChannel = await channels_service_1.ChannelsService.update(channelId, updateChannelDto);
    return c.json({
        data: updatedChannel,
        status: 200,
    });
})
    .put('/:channelId/members/:memberId', async (c) => {
    const channelId = c.req.param('channelId');
    const memberId = c.req.param('memberId');
    const updatedChannel = await channels_service_1.ChannelsService.addMember(channelId, memberId);
    return c.json({
        data: updatedChannel,
        status: 200,
    });
});
//# sourceMappingURL=channels.controller.js.map