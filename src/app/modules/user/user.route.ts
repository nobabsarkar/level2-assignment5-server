import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middleweres/validateRequest";
import { userValidations } from "./user.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidations.userValidationSchema),
  UserControllers.createUser
);

export const AuthRoutes = router;
