"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgsService = void 0;
const db_1 = require("@/lib/db");
exports.OrgsService = {
    async getBy(orgId) {
        const org = await db_1.db.org.findFirst({
            where: {
                id: orgId,
            },
        });
        return org;
    },
    async create(org) {
        const createdOrg = await db_1.db.org.create({
            data: org,
        });
        return createdOrg;
    },
};
//# sourceMappingURL=orgs.service.js.map