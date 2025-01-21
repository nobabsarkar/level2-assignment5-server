/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from "jsonwebtoken";

// export const createToken = (
//   jwtPayload: { _id: string; email: string; name: string; role: string },
//   secret: string,
//   expireIn: string
// ) => {
//   return jwt.sign(jwtPayload, secret, {
//     expireIn,
//   });
// };

export const createToken = (
  jwtPayload: {
    _id: string;
    email: string;
    role: string;
    name: string;
  },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
