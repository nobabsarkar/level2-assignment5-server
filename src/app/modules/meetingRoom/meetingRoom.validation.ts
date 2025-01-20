import { z } from "zod";

const meetingRoomValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    roomName: z.string(),
    capacity: z.string(),
    pricePerSlot: z.string(),
    role: z.string().default("USER"),
  }),
});

export const MeetingRoomValidations = {
  meetingRoomValidationSchema,
};
