import { z } from "zod";

// Define validation schema for creating a coupon
export const createCouponValidation = z.object({
  code: z.string().min(1, "Coupon code is required"),
  discountAmount: z
    .number()
    .min(1, "Discount amount must be greater than 0")
    .max(100, "Discount amount cannot exceed 100"),
  discountType: z.enum(["percentage", "fixed"]),
  expirationDate: z.string().refine((date) => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime()) && parsedDate > new Date();
  }, "Expiration date must be a valid future date"),
});

// Export types for form data
export type CreateCouponData = z.infer<typeof createCouponValidation>;
