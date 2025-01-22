"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const meetingRoom_route_1 = require("../modules/meetingRoom/meetingRoom.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.AuthRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.LoginRoutes,
    },
    {
        path: "/bookings",
        route: meetingRoom_route_1.MeetingRoomRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
