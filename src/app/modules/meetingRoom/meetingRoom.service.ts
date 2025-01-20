import { TMeetingRoom } from "./meetingRoom.interface";
import { MeetingRoom } from "./meetingRoom.model";

const createMeetingRoomIntoDB = async (payload: TMeetingRoom) => {
  const result = await MeetingRoom.create(payload);
  return result;
};

const meetingRoomFromDB = async () => {
  const result = await MeetingRoom.find();
  return result;
};

export const MeetingRoomServices = {
  createMeetingRoomIntoDB,
  meetingRoomFromDB,
};
