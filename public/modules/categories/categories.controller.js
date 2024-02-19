"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
const categories_service_1 = require("./categories.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const zod_validator_1 = require("@hono/zod-validator");
const channel_dto_1 = require("../channels/dto/channel.dto");
const channels_service_1 = require("../channels/channels.service");
exports.router = new hono_1.Hono();
exports.router
    .post('/:categoryId/channels', (0, zod_validator_1.zValidator)('json', channel_dto_1.upsertChannelDto), async (c) => {
    const categoryId = c.req.param('categoryId');
    const createChanelInput = await c.req.json();
    const channel = await channels_service_1.ChannelsService.createByCategory(categoryId, createChanelInput);
    return c.json({
        data: channel,
        status: 201,
    });
})
    .put('/:categoryId', (0, zod_validator_1.zValidator)('json', create_category_dto_1.upsertCategoryDto), async (c) => {
    const categoryId = c.req.param('categoryId');
    const updateCategoryInput = await c.req.json();
    const updatedCategory = await categories_service_1.CategoriesService.update(categoryId, updateCategoryInput);
    return c.json({
        data: updatedCategory,
        status: 200,
    });
})
    .delete('/:categoryId', async (c) => {
    const categoryId = c.req.param('categoryId');
    await categories_service_1.CategoriesService.deleteBy(categoryId);
    return c.json({
        message: 'Category deleted successfully',
        status: 200,
    });
});
//# sourceMappingURL=categories.controller.js.map