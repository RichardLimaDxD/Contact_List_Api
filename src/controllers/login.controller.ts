import { Request, Response } from "express";
import { loginService } from "../services/login/login.service";
import { Tlogin } from "../interfaces/login.interfaces";

const loginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: Tlogin = request.body;

  const token: string = await loginService(data);

  return response.status(200).json({ token });
};

export { loginController };
