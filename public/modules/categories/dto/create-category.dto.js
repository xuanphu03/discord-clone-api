"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertCategoryDto = void 0;
const zod_1 = require("zod");
exports.upsertCategoryDto = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    isPrivate: zod_1.z.boolean().default(false),
});
//# sourceMappingURL=create-category.dto.js.map