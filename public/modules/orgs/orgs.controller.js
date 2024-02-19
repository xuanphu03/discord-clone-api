"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
const db_1 = require("@/lib/db");
exports.router = new hono_1.Hono();
exports.router
    .get('/', async (c) => {
    const orgs = await db_1.db.org.findMany({});
    return c.json(orgs);
})
    .post('/', async (c) => {
    const { name, icon, userId } = await c.req.json();
    const orgs = await db_1.db.org.create({
        data: {
            name: name,
            icon: icon,
            userId: userId,
        },
    });
    return c.json(orgs);
})
    .get('/:orgID/members', async (c) => c.json([
    {
        id: '001',
        displayName: 'xuna fu',
        username: 'Xuan Phu',
        avatar: 'https://th.bing.com/th/id/OIP.GS0ptM4PYsIKvcRmTCoOTgHaEF?w=309&h=180&c=7&r=0&o=5&pid=1.7',
        memberSince: '2022-01-01',
        joinedDiscord: '2022-01-01',
        joinMethod: 'Discord',
        roles: ["Admin"],
    },
]))
    .get('/:orgID/:channelID/members', (c) => c.json([
    {
        id: 1,
        displayName: 'Shin',
        userName: 'shinosuke123',
        avatar: 'https://th.bing.com/th/id/OIP.GS0ptM4PYsIKvcRmTCoOTgHaEF?w=309&h=180&c=7&r=0&o=5&pid=1.7',
        backgroundColor: '#2fffff',
        roles: ['Học viên'],
        category: {
            id: 1,
            name: 'Đà Nẵng',
        },
    },
    {
        id: 2,
        displayName: 'XunaFu',
        userName: 'kuma.xp03',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
        backgroundColor: '#2faf9f',
        roles: ['Admin', 'F0'],
        category: {
            id: 1,
            name: 'Đà Nẵng',
        },
    },
    {
        id: 3,
        displayName: 'Xuna',
        userName: 'Xunafudev',
        avatar: 'https://th.bing.com/th/id/OIP.GS0ptM4PYsIKvcRmTCoOTgHaEF?w=309&h=180&c=7&r=0&o=5&pid=1.7',
        backgroundColor: '#56d6fd',
        roles: ['Học viên'],
        category: {
            id: 1,
            name: 'Đà Nẵng',
        },
    },
    {
        id: 4,
        displayName: 'Bitay',
        userName: 'trantin03',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxcQs95fyxfOtD_tiH5-dedux-NtPJ9HRWg&usqp=CAU',
        backgroundColor: '#56d6fd',
        roles: ['Học viên'],
        category: {
            id: 2,
            name: 'Game',
        },
    },
    {
        id: 5,
        displayName: 'ShibaInu',
        userName: 'akaimaru',
        avatar: 'https://th.bing.com/th?q=HSL-35&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=strict&t=1&mw=247',
        backgroundColor: 'red',
        roles: ['Học viên'],
        category: {
            id: 1,
            name: 'Đà Nẵng',
        },
    },
]));
;
//# sourceMappingURL=orgs.controller.js.map