import { db } from '@/lib/db';
import { BadRequestException } from '@/utils/exceptions';
import { Prisma } from '@prisma/client';

export const ChannelsService = {
  async getAllBy(orgId: string) {
    const channels = await db.channel.findMany({
      where: {
        orgId: orgId,
      },
    });

    return channels;
  },
  async createByCategory(categoryId: string, createChannelDto: Prisma.ChannelCreateInput) {
    const channel = await db.channel.create({
      data: {
        category: {
          connect: {
            id: categoryId,
          },
        },
        ...createChannelDto,
      },
    });

    return channel;
  },
  async createByOrg(orgId: string, createChannelDto: Prisma.ChannelCreateInput) {
    const channel = await db.channel.create({
      data: {
        org: {
          connect: {
            id: orgId,
          },
        },
        ...createChannelDto,
      },
    });

    return channel;
  },
  async getBy(channelId: string) {
    const channel = await db.channel.findFirst({
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
  async delete(channelId: string) {
    try {
      return await db.channel.delete({
        where: {
          id: channelId,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new BadRequestException('Channel not found');
      }
      throw error;
    }
  },
  async update(channelId: string, updateChannelDto: Prisma.ChannelUpdateInput) {
    const updatedChannel = await db.channel.update({
      where: {
        id: channelId,
      },
      data: updateChannelDto,
    });
    return updatedChannel;
  },
  async addMember(channelId: string, memberId: string) {
    const updatedChannel = await db.channel.update({
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
