import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { TuserRequest, TuserResponse } from "../interfaces/user.interfaces";
import { readUserService } from "../services/users/readUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TuserRequest = request.body;

  const newData: TuserResponse = await createUserService(data);

  return response.status(201).json(newData);
};

// const readUserController = async (
//   request: Request,
//   response: Response
// ): Promise<Response> => {
//   const data = await readUserService();

//   return response.json(data);
// };

// const updateUserController = async (
//   request: Request,
//   response: Response
// ): Promise<Response> => {
//   const data = request.body;

//   const id: number = parseInt(request.params.id);

//   const newData = await updateUserService(data, id);

//   return response.json(newData);
// };

// const deleteUserController = async (
//   request: Request,
//   response: Response
// ): Promise<void> => {
//   const id: number = parseInt(request.params.id);

//   await deleteUserService(id);

//   return response.status(204).send();
// };

export {
  createUserController,
  // readUserController,
  // updateUserController,
  // deleteUserController,
};
