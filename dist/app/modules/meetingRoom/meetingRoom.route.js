"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const meetingRoom_controller_1 = require("./meetingRoom.controller");
const validateRequest_1 = __importDefault(require("../../middleweres/validateRequest"));
const meetingRoom_validation_1 = require("./meetingRoom.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(meetingRoom_validation_1.MeetingRoomValidations.meetingRoomValidationSchema), meetingRoom_controller_1.MeetingRoomControllers.createMeetingRoom);
router.get("/", meetingRoom_controller_1.MeetingRoomControllers.meetingRoom);
router.get("/:id", meetingRoom_controller_1.MeetingRoomControllers.singleMeetingRoom);
exports.MeetingRoomRoutes = router;
