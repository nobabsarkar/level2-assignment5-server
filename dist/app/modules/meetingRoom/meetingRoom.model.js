"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRoom = void 0;
const mongoose_1 = require("mongoose");
const meetingRoomSchema = new mongoose_1.Schema({
    image: { type: String, required: [true, "Image is required"] },
    roomName: { type: String, required: [true, "Room Name is required"] },
    capacity: { type: String, required: [true, "capacity is required"] },
    pricePerSlot: { type: String, required: [true, "Price  is required"] },
});
exports.MeetingRoom = (0, mongoose_1.model)("MeetingRoom", meetingRoomSchema);
