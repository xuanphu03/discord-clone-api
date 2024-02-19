"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertChannelDto = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.upsertChannelDto = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    isPrivate: zod_1.z.boolean(),
    type: zod_1.z.nativeEnum(client_1.ChannelType),
});
//# sourceMappingURL=channel.dto.js.map