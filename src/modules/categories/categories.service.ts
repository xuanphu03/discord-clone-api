import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';

export const CategoriesService = {
  create: async (orgId: string, createCategoryDto: Prisma.CategoryCreateInput) => {
    const category = await db.category.create({
      data: {
        ...createCategoryDto,
        org: {
          connect: {
            id: orgId,
          },
        },
      },
    });

    return category;
  },
  update: async (categoryId: string, updateCategoryDto: Prisma.CategoryUpdateInput) => {
    const category = await db.category.update({
      where: {
        id: categoryId,
      },
      data: updateCategoryDto,
    });
    return category;
  },
  deleteBy: async (categoryId: string) => {
    return db.category.delete({
      where: {
        id: categoryId,
      },
    });
  },
};
