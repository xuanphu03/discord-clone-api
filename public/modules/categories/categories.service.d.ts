export declare const CategoriesService: {
    create: (orgId: string, createCategoryDto: Prisma.CategoryCreateInput) => Promise<any>;
    update: (categoryId: string, updateCategoryDto: Prisma.CategoryUpdateInput) => Promise<any>;
    deleteBy: (categoryId: string) => Promise<any>;
};
