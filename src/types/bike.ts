export interface IBike {
  _id?: string;
  name: string;
  description: string;
  images: string[];
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
}

export interface IGetAllBikeBikeResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IBike[];
}
