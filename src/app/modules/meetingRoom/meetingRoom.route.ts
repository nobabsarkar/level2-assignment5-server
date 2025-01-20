import express from "express";
import { MeetingRoomControllers } from "./meetingRoom.controller";
import validateRequest from "../../middleweres/validateRequest";
import { MeetingRoomValidations } from "./meetingRoom.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(MeetingRoomValidations.meetingRoomValidationSchema),
  MeetingRoomControllers.createMeetingRoom
);

router.get("/", MeetingRoomControllers.meetingRoom);

export const MeetingRoomRoutes = router;
