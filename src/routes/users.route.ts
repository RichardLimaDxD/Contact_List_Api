import { Router } from "express";
import { createUserController } from "../controllers/users.controller";

const usersRoute: Router = Router();

usersRoute.post("", createUserController);

export { usersRoute };
