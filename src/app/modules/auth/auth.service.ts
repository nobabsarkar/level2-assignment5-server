import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogin } from "./auth.interface";
import { createToken } from "./auth.utils";
import config from "../../config";
// import jwt from "jsonwebtoken";

const login = async (payload: TLogin) => {
  // const user = await User.findOne({ email: payload.email });
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User Not Found!");
  }

  if (user.password !== payload.password) {
    throw new Error("Password Not Match");
  }

  const jwtPayload = {
    _id: user?._id.toString(),
    email: user?.email as string,
    name: user?.name as string,
    role: user?.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    // user,
    refreshToken,
  };
};

// const refreshToken = async (token: string) => {
//   const decoded = jwt.verify(token, config.jwt_refresh_secret as string);
//   const { email, iat } = decoded;

//   const user = await User.findOne(email);

//   if (!user) {
//     throw new AppError(StatusCodes.NOT_FOUND, "This user is not found !");
//   }

//   // create token and sent to the client
//   const jwtPayload = {
//     _id: user?._id.toString(),
//     email: user?.email as string,
//     name: user?.name as string,
//     role: user?.role as string,
//   };

//   const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string
//   );

//   return { accessToken };
// };

export const AuthServices = {
  login,
};
