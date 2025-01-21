import { TUser } from "./user.interface";
import { User } from "./user.model";

// created user
const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getSingleUserFromDB,
};
