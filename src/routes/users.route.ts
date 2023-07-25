import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { validateBodyMiddleware } from "../middlewares/validatedBody.middleware";
import { userRequestSchema } from "../schemas/user.schema";
import {
  emailExistsMIddleware,
  telephoneExistsMIddleware,
} from "../middlewares/verify.middleware";

const usersRoute: Router = Router();

usersRoute.post(
  "",
  validateBodyMiddleware(userRequestSchema),
  emailExistsMIddleware,
  telephoneExistsMIddleware,
  createUserController
);

export { usersRoute };
