import { z } from "zod";

export const authValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const authRegisterSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  phone: z.string({ required_error: "Phone is required" }),
  address: z.string({ required_error: "Address is required" }),
});

export type AuthFormValues = z.infer<typeof authValidationSchema>;

export type AuthRegisterValues = z.infer<typeof authRegisterSchema>;
