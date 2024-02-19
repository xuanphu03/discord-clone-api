"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrgDto = void 0;
const zod_1 = require("zod");
exports.createOrgDto = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    icon: zod_1.z.string().min(1, 'Icon is required'),
});
//# sourceMappingURL=create-org.dto.js.map