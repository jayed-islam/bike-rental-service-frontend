import { z } from "zod";

const paymentSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  email: z.string().optional(),
});

export interface PaymentFormData extends z.infer<typeof paymentSchema> {}

export { paymentSchema };
