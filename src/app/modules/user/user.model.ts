import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: { type: String, required: [true, "Name is Required"] },
  email: { type: String, required: [true, "Email is Required"], unique: true },
  password: { type: String, required: [true, "Password is Required"] },
  phone: {
    type: String,
    required: [true, "Phone Number is Required"],
    unique: true,
  },
  address: { type: String, required: [true, "Address is Required"] },
  //   role: {
  //     type: String,
  //     required: [true, "Role is required"],
  //     enum: ["user", "admin"],
  //   },
});

export const User = model<TUser>("User", userSchema);
