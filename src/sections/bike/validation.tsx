import { z } from "zod";

const createBikeValidation = z.object({
  name: z.string({
    required_error: "Bike model is required",
  }),
  description: z.string({
    required_error: "Description of the bike is required",
  }),
  pricePerHour: z.number({
    required_error: "Rental price per hour is required",
  }),
  isAvailable: z.boolean().optional().default(true),
  cc: z.number({
    required_error: "Bike cc is required",
  }),
  year: z.number({
    required_error: "The manufacturing year is required",
  }),
  model: z.string({ required_error: "The model is required" }),
  brand: z.string({ required_error: "Brand is required" }),
});

export { createBikeValidation };
