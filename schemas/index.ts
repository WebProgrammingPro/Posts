import { z } from "zod";

import { Audience } from "@prisma/client";

export const FormInputPostSchema = z.object({
  id: z.string().nullable(),
  audience: z.enum([Audience.Public, Audience.Friends, Audience.Only]),
  content: z.string().min(1, { message: "Content Is Required" }),
});
export type FormInputPostValues = z.infer<typeof FormInputPostSchema>;
