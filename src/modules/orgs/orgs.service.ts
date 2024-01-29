import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export const OrgsService = {
  async getBy(orgId: string) {
    const org = await db.org.findFirst({
      where: {
        id: orgId,
      },
    });

    return org;
  },
  async create(org: Prisma.OrgCreateInput) {
    const createdOrg = await db.org.create({
      data: org,
    });

    return createdOrg;
  },
};