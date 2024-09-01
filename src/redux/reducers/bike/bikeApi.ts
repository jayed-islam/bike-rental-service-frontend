/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBike, IGetAllBikeBikeResponse } from "../../../types/bike";
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

interface IUpdateBike {
  id: string;
  bike: Partial<IBike>;
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBike: builder.mutation<IGetSingleBikeResponse, IBike>({
      query: (body: IBike) => ({
        url: "/bikes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["bikes"],
    }),
    updateBike: builder.mutation<IGetSingleBikeResponse, IUpdateBike>({
      query: ({ id, bike }) => ({
        url: `/bikes/update/${id}`,
        method: "PUT",
        body: bike,
      }),
      invalidatesTags: ["bikes"],
    }),
    deleteBike: builder.mutation<IGetSingleBikeResponse, string>({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bikes"],
    }),
    getAvailableBikes: builder.query<IGetAllBikeBikeResponse, void>({
      query: () => ({
        url: "/bikes/get-available-bike",
        method: "GET",
      }),
      providesTags: ["available-bike", "bikes"],
    }),
    getAllBikes: builder.query<IGetAllBikeBikeResponse, BikeQueryParams>({
      query: (body) => ({
        url: "/bikes/get-all",
        method: "POST",
        body,
      }),
      providesTags: ["bikes"],
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
