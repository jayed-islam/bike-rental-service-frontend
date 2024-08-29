import { z } from "zod";

const accountSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  email: z.string().optional(),
});

export interface AccountFromData extends z.infer<typeof accountSchema> {}

export { accountSchema };
