import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
} from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type Tcontact = z.infer<typeof contactSchema>;

type TcontactRequest = z.infer<typeof contactSchemaRequest>;

type TcontactResponse = z.infer<typeof contactSchemaResponse>;

type TcontactPatch = DeepPartial<TcontactRequest>;

export { Tcontact, TcontactRequest, TcontactResponse, TcontactPatch };
