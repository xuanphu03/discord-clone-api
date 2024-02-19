"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
const auth_service_1 = require("./auth.service");
exports.router = new hono_1.Hono();
exports.router
    .post('/sign-in', async (c) => {
    const { email, password } = await c.req.json();
    const token = await auth_service_1.AuthService.signIn(email, password);
    return c.json({ token }, 200);
})
    .post('/sign-up', async (c) => {
    const { email, password } = await c.req.json();
    await auth_service_1.AuthService.signUp(email, password);
    return c.json({
        message: 'Sign up successfully. Please check your email to verify your account.',
    }, 201);
});
//# sourceMappingURL=auth.controller.js.map