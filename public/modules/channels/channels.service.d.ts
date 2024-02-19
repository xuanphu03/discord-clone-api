export declare const ChannelsService: {
    getAllBy(orgId: string): Promise<any>;
    createByCategory(categoryId: string, createChannelDto: Prisma.ChannelCreateInput): Promise<any>;
    createByOrg(orgId: string, createChannelDto: Prisma.ChannelCreateInput): Promise<any>;
    getBy(channelId: string): Promise<any>;
    delete(channelId: string): Promise<any>;
    update(channelId: string, updateChannelDto: Prisma.ChannelUpdateInput): Promise<any>;
    addMember(channelId: string, memberId: string): Promise<any>;
};
