import { z } from "zod";

const userSchema = z.object({
  id: z.number().int(),
  fullname: z.string().max(60),
  email: z.string().email().max(60),
  telephone: z.string().max(11),
  password: z.string().max(120),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.date().or(z.string()).nullish(),
});

const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userResponseSchema = userSchema.omit({ password: true });

const userArraySchema = userResponseSchema.array();

const userPatchSchema = userRequestSchema.partial();

export {
  userPatchSchema,
  userSchema,
  userRequestSchema,
  userResponseSchema,
  userArraySchema,
};
