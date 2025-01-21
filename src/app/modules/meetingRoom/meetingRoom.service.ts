import { TMeetingRoom } from "./meetingRoom.interface";
import { MeetingRoom } from "./meetingRoom.model";

const createMeetingRoomIntoDB = async (payload: TMeetingRoom) => {
  const result = await MeetingRoom.create(payload);
  return result;
};

// const meetingRoomFromDB = async () => {
//   const result = await MeetingRoom.find();
//   return result;
// };

const meetingRoomFromDB = async (name: string = "") => {
  if (name) {
    // Find a single meeting room by name, case-insensitive
    return await MeetingRoom.findOne({
      roomName: { $regex: name, $options: "i" },
    });
  }
  // If no name is provided, return all meeting rooms
  return await MeetingRoom.find();
};

const getSingleRoomFromDB = async (id: string) => {
  const result = await MeetingRoom.findById(id);
  return result;
};

export const MeetingRoomServices = {
  createMeetingRoomIntoDB,
  meetingRoomFromDB,
  getSingleRoomFromDB,
};
