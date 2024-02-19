"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const db_1 = require("@/lib/db");
exports.CategoriesService = {
    create: async (orgId, createCategoryDto) => {
        const category = await db_1.db.category.create({
            data: Object.assign(Object.assign({}, createCategoryDto), { org: {
                    connect: {
                        id: orgId,
                    },
                } }),
        });
        return category;
    },
    update: async (categoryId, updateCategoryDto) => {
        const category = await db_1.db.category.update({
            where: {
                id: categoryId,
            },
            data: updateCategoryDto,
        });
        return category;
    },
    deleteBy: async (categoryId) => {
        return db_1.db.category.delete({
            where: {
                id: categoryId,
            },
        });
    },
};
//# sourceMappingURL=categories.service.js.map