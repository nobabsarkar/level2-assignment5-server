import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogin } from "./auth.interface";
import { createToken } from "../../utils/token";

const login = async (payload: TLogin) => {
  const data = await User.findOne({ email: payload.email });

  const token = await createToken(
    {
      _id: data?._id,
      email: data?.email as string,
      name: data?.name as string,
      role: data?.role as string,
    },
    "ok",
    "7d"
  );

  if (!data) {
    throw new AppError(StatusCodes.NOT_FOUND, "User Not Found!");
  }

  if (data.password !== payload.password) {
    throw new Error("Password Not Match");
  }

  // return token;
  return data;
};

export const AuthServices = {
  login,
};
