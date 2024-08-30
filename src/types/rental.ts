import { IBike } from "./bike";

export interface IBooking {
  _id: string;
  userId: string;
  bikeId: IBike;
  startTime: Date;
  returnTime: Date | null;
  totalCost: number;
  status: "paid" | "unpaid";
  isReturned: boolean;
}

export interface IGetAllRentalResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IBooking[];
}

export interface IGetSingleRentalResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    payment_url: string;
    success: boolean;
  };
}
