import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { validateBodyMiddleware } from "../middlewares/validatedBody.middleware";
import { loginSchema } from "../schemas/login.schema";

const loginRoute: Router = Router();

loginRoute.post("", validateBodyMiddleware(loginSchema), loginController);

export { loginRoute };
