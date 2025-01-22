"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRoomValidations = void 0;
const zod_1 = require("zod");
const meetingRoomValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        image: zod_1.z.string(),
        roomName: zod_1.z.string(),
        capacity: zod_1.z.string(),
        pricePerSlot: zod_1.z.string(),
        role: zod_1.z.string().default("USER"),
    }),
});
exports.MeetingRoomValidations = {
    meetingRoomValidationSchema,
};
