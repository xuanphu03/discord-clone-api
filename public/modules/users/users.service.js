"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const db_1 = require("@/lib/db");
exports.UsersService = {
    updateMe: async (user, updateMeDto) => {
        const _a = await db_1.db.user.update({
            where: {
                id: user.id,
            },
            data: updateMeDto,
        }), { password, salt } = _a, me = __rest(_a, ["password", "salt"]);
        return me;
    },
};
//# sourceMappingURL=users.service.js.map