/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBike, IGetAllBikeBikeResponse } from "../../../types/bike";
import { IProduct } from "../../../types/product";
import { api } from "../../api";

interface IGetSingleBikeResponse {
  data: IBike;
  message: string;
  success: boolean;
}

interface BikeQueryParams {
  brand?: string;
  model?: string;
  name?: string;
  available?: boolean;
}

interface IUpdateProductStockResponse {
  message: string;
  success: boolean;
  data: IProduct[];
}

interface IUpdateProductStock {
  products: {
    productId: string;
    quantity: number;
  }[];
}

interface IUpdateBike {
  id: string;
  product: Partial<IBike>;
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBike: builder.mutation<IGetSingleBikeResponse, IBike>({
      query: (body: IBike) => ({
        url: "/bike",
        method: "POST",
        body,
      }),
      invalidatesTags: ["bikes"],
    }),
    updateBike: builder.mutation<IGetSingleBikeResponse, IUpdateBike>({
      query: ({ id, product }) => ({
        url: `/bike/update/${id}`,
        method: "PUT",
        body: { product },
      }),
      invalidatesTags: ["bikes"],
    }),
    deleteBike: builder.mutation<IGetSingleBikeResponse, string>({
      query: (id) => ({
        url: `/bike/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bikes"],
    }),
    getAvailableBikes: builder.query<IGetAllBikeBikeResponse, void>({
      query: () => ({
        url: "/bikes/get-available-bike",
        method: "GET",
      }),
      providesTags: ["available-bike"],
    }),
    getAllBikes: builder.query<IGetAllBikeBikeResponse, BikeQueryParams>({
      query: (body) => ({
        url: "/bikes/get-all",
        method: "POST",
        body,
      }),
      providesTags: ["available-bike"],
    }),
    getSingleBike: builder.query<IGetSingleBikeResponse, string>({
      query: (id) => ({
        url: `/bikes/get-single/${id}`,
        method: "GET",
      }),
      providesTags: ["single-bike"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAvailableBikesQuery,
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useCreateBikeMutation,
  useDeleteBikeMutation,
  useUpdateBikeMutation,
} = productApi;
