import { Prisma } from "@prisma/client";
export declare const OrgsService: {
    getBy(orgId: string): Promise<{
        id: string;
        icon: string;
        name: string;
        userId: string;
    }>;
    create(org: Prisma.OrgCreateInput): Promise<{
        id: string;
        icon: string;
        name: string;
        userId: string;
    }>;
};
