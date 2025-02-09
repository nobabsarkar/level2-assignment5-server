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

const meetingRoom = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await MeetingRoomServices.meetingRoomFromDB(query);

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
