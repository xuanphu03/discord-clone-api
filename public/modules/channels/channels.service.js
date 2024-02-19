"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsService = void 0;
const db_1 = require("@/lib/db");
const exceptions_1 = require("@/utils/exceptions");
const client_1 = require("@prisma/client");
exports.ChannelsService = {
    async getAllBy(orgId) {
        const channels = await db_1.db.channel.findMany({
            where: {
                orgId: orgId,
            },
        });
        return channels;
    },
    async createByCategory(categoryId, createChannelDto) {
        const channel = await db_1.db.channel.create({
            data: Object.assign({ category: {
                    connect: {
                        id: categoryId,
                    },
                } }, createChannelDto),
        });
        return channel;
    },
    async createByOrg(orgId, createChannelDto) {
        const channel = await db_1.db.channel.create({
            data: Object.assign({ org: {
                    connect: {
                        id: orgId,
                    },
                } }, createChannelDto),
        });
        return channel;
    },
    async getBy(channelId) {
        const channel = await db_1.db.channel.findFirst({
            where: {
                id: channelId,
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                email: true,
                                id: true,
                                fullName: true,
                            },
                        },
                    },
                },
            },
        });
        return channel;
    },
    async delete(channelId) {
        try {
            return await db_1.db.channel.delete({
                where: {
                    id: channelId,
                },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new exceptions_1.BadRequestException('Channel not found');
            }
            throw error;
        }
    },
    async update(channelId, updateChannelDto) {
        const updatedChannel = await db_1.db.channel.update({
            where: {
                id: channelId,
            },
            data: updateChannelDto,
        });
        return updatedChannel;
    },
    async addMember(channelId, memberId) {
        const updatedChannel = await db_1.db.channel.update({
            where: {
                id: channelId,
            },
            data: {
                members: {
                    create: [
                        {
                            user: {
                                connect: {
                                    id: memberId,
                                },
                            },
                        },
                    ],
                },
            },
        });
        return updatedChannel;
    },
};
//# sourceMappingURL=channels.service.js.map