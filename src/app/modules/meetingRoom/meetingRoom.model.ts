import { model, Schema } from "mongoose";
import { TMeetingRoom } from "./meetingRoom.interface";

const meetingRoomSchema = new Schema<TMeetingRoom>({
  image: { type: String, required: [true, "Image is required"] },
  roomName: { type: String, required: [true, "Room Name is required"] },
  capacity: { type: String, required: [true, "capacity is required"] },
  pricePerSlot: { type: String, required: [true, "Price  is required"] },
});

export const MeetingRoom = model<TMeetingRoom>(
  "MeetingRoom",
  meetingRoomSchema
);
