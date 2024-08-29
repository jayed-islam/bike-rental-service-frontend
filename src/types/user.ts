/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  phone: string;
  address: string;
  name: string;
}

export interface IUser {
  _id: string;
  email: string;
  role: string;
  name: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAuthLoginResponse {
  token: string;
  success: boolean;
  message: string;
  data: IUser;
}

export interface RegisterData {
  email: string;
  role: string;
  addresses: any[];
  isDeleted: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IRegisterResponse {
  success: boolean;
  message: string;
  data: RegisterData;
}

export interface IGetMeResponse {
  success: boolean;
  message: string;
  data: IUser;
}

export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;
