import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controller";
import { validateBodyMiddleware } from "../middlewares/validatedBody.middleware";
import { userPatchSchema, userRequestSchema } from "../schemas/user.schema";
import {
  emailExistsMIddleware,
  fullnameExistsMIddleware,
  idExistsMiddleware,
  telephoneExistsMIddleware,
  verifyUserMiddleware,
} from "../middlewares/verify.middleware";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";

const usersRoute: Router = Router();

usersRoute.post(
  "",
  validateBodyMiddleware(userRequestSchema),
  emailExistsMIddleware,
  fullnameExistsMIddleware,
  telephoneExistsMIddleware,
  createUserController
);

usersRoute.get("", validatedTokenMiddleware, retrieveUserController);

usersRoute.get(
  "/:id",
  validatedTokenMiddleware,
  verifyUserMiddleware,
  readUserController
);

usersRoute.patch(
  "/:id",
  validatedTokenMiddleware,
  verifyUserMiddleware,
  idExistsMiddleware,
  validateBodyMiddleware(userPatchSchema),
  fullnameExistsMIddleware,
  emailExistsMIddleware,
  telephoneExistsMIddleware,
  updateUserController
);

usersRoute.delete(
  "/:id",
  validatedTokenMiddleware,
  verifyUserMiddleware,
  idExistsMiddleware,
  deleteUserController
);

export { usersRoute };
