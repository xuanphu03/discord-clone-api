"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
exports.router = new hono_1.Hono();
exports.router.get('/me', async (c) => {
    const user = c.get('user');
    return c.json({
        data: user,
        status: 200,
    });
});
//# sourceMappingURL=users.controller.js.map