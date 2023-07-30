import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../error/error";
import "dotenv/config";

const validatedTokenMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authentic: string | undefined = request.headers.authorization;

  if (authentic === undefined) {
    throw new AppError("Missing bearer token", 401);
  }

  const [_bearer, token] = authentic.split(" ");

  verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    response.locals.id = decoded.sub;
  });

  return next();
};

export { validatedTokenMiddleware };
