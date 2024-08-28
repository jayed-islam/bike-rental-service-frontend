/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGetAllBikeBikeResponse } from "../../../types/bike";
import { IProduct } from "../../../types/product";
import { api } from "../../api";

interface IGetSingleProductRecponse {
  data: IProduct;
  message: string;
  success: boolean;
}

interface BikeQueryParams {
  brand?: string;
  model?: string;
  name?: string;
  available?: string;
}

interface IGetProductListResponse {
  message: string;
  state: boolean;
  data: {
    products: IProduct[];
    pagination: {
      totalItems: number;
      totalPages: number;
      currentPage: number;
      itemsPerPage: number;
    };
  };
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

interface IUpdateProduct {
  id: string;
  product: Partial<IProduct>;
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<IGetSingleProductRecponse, IProduct>({
      query: (body: IProduct) => ({
        url: "/product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation<IGetSingleProductRecponse, IUpdateProduct>({
      query: ({ id, product }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: { product },
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation<IGetSingleProductRecponse, string>({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
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
    getProductById: builder.query<IGetSingleProductRecponse, string>({
      query: (id) => ({
        url: `/product/get-single/${id}`,
        method: "GET",
      }),
      providesTags: ["single-product"],
    }),
    updateProductStock: builder.mutation<
      IUpdateProductStockResponse,
      IUpdateProductStock
    >({
      query: (body: IUpdateProductStock) => ({
        url: "/product/update-stock",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["products", "single-product"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetAvailableBikesQuery, useGetAllBikesQuery } = productApi;
