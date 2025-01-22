"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRoomServices = void 0;
const meetingRoom_model_1 = require("./meetingRoom.model");
const createMeetingRoomIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meetingRoom_model_1.MeetingRoom.create(payload);
    return result;
});
// implement search
const meetingRoomFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const objQuery = Object.assign({}, query);
    const search = query.search || "";
    const searchFilter = meetingRoom_model_1.MeetingRoom.find({
        roomName: { $regex: search, $options: "i" },
    });
    const excludeFields = ["search", "sort", "limit", "page", "fields"];
    excludeFields.forEach((el) => delete objQuery[el]);
    const filter = searchFilter.find(objQuery);
    const result = yield filter.find();
    return result;
});
const getSingleRoomFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meetingRoom_model_1.MeetingRoom.findById(id);
    return result;
});
exports.MeetingRoomServices = {
    createMeetingRoomIntoDB,
    meetingRoomFromDB,
    getSingleRoomFromDB,
};
