import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MeetingRoomServices } from "./meetingRoom.service";

const createMeetingRoom = catchAsync(async (req, res) => {
  const result = await MeetingRoomServices.createMeetingRoomIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meeting Room created successfully!",
    data: result,
  });
});

// const meetingRoom = catchAsync(async (req, res) => {
//   const result = await MeetingRoomServices.meetingRoomFromDB();

//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: "Meeting Room retrived successfully!",
//     data: result,
//   });
// });

const meetingRoom = catchAsync(async (req, res) => {
  const { name } = req.query; // Extract 'name' from query string
  const result = await MeetingRoomServices.meetingRoomFromDB(name as string); // Pass 'name' to the service

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meeting room retrieved successfully!",
    data: result,
  });
});

const singleMeetingRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await MeetingRoomServices.getSingleRoomFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Meeting room retrived successfully!",
    data: result,
  });
});

export const MeetingRoomControllers = {
  meetingRoom,
  createMeetingRoom,
  singleMeetingRoom,
};
