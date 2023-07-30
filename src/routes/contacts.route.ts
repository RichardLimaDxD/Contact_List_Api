import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  patchContactController,
  readContactController,
} from "../controllers/contacts.controller";
import {
  contactSchemaPatch,
  contactSchemaRequest,
} from "../schemas/contact.schema";
import { validateBodyMiddleware } from "../middlewares/validatedBody.middleware";
import { checkContactUserMiddleware } from "../middlewares/verify.middleware";
import { validatedTokenMiddleware } from "../middlewares/validatedToken.middleware";

const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  validatedTokenMiddleware,
  validateBodyMiddleware(contactSchemaRequest),
  createContactController
);

contactRoutes.get("", validatedTokenMiddleware, readContactController);

contactRoutes.patch(
  "/:id",
  validatedTokenMiddleware,
  checkContactUserMiddleware,
  validateBodyMiddleware(contactSchemaPatch),
  patchContactController
);

contactRoutes.delete(
  "/:id",
  validatedTokenMiddleware,
  checkContactUserMiddleware,
  deleteContactController
);

export { contactRoutes };
