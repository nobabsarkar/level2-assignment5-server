import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogin } from "./auth.interface";

const login = async (payload: TLogin) => {
  const data = await User.findOne({ email: payload.email });
  if (!data) {
    throw new AppError(StatusCodes.NOT_FOUND, "User Not Found!");
  }

  if (data.password !== payload.password) {
    throw new Error("Password Not Match");
  }

  return data;
};

export const AuthServices = {
  login,
};
