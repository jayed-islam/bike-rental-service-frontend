export interface ICoupon {
  id?: string;
  code: string;
  discountAmount: number;
  discountType: "percentage" | "fixed";
  expirationDate: Date;
  isActive: boolean;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
