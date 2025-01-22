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

const meetingRoomFromDB = async (query: Record<string, unknown>) => {
  const objQuery = { ...query };

  const search = query.search || "";

  const searchFilter = MeetingRoom.find({
    roomName: { $regex: search, $options: "i" },
  });

  const excludeFields = ["search", "sort", "limit", "page", "fields"];
  excludeFields.forEach((el) => delete objQuery[el]);

  const filter = searchFilter.find(objQuery);

  const result = await filter.find();
  return result;
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
