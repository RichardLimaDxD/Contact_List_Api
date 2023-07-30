import { z } from "zod";

const contactSchema = z.object({
  id: z.number().int(),
  fullname: z.string().max(60),
  email: z.string().email().max(60),
  telephone: z.string().max(11),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.date().or(z.string()).nullish(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const contactSchemaResponse = z.array(contactSchema);

const contactSchemaPatch = contactSchemaRequest.partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaPatch,
};
