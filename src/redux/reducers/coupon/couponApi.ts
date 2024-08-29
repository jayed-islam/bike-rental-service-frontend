import { ICoupon } from "../../../types/coupon";
import { api } from "../../api";

export interface IGetAllCouponResponse {
  success: boolean;
  message: string;
  data: ICoupon[];
}

export interface IGetSingleCouponResponse {
  success: boolean;
  message: string;
  data: ICoupon;
}

export const couponApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoupons: builder.query<IGetAllCouponResponse, void>({
      query: () => "/coupon/get-all",
      providesTags: ["coupons"],
    }),
    // Get a coupon by code
    getCouponByCode: builder.query<IGetSingleCouponResponse, string>({
      query: (code) => `/${code}`,
    }),
    // Create a new coupon
    createCoupon: builder.mutation<IGetSingleCouponResponse, Partial<ICoupon>>({
      query: (newCoupon) => ({
        url: "/coupon/create",
        method: "POST",
        body: newCoupon,
      }),
      invalidatesTags: ["coupons"],
    }),
    // Update an existing coupon
    updateCoupon: builder.mutation<
      IGetSingleCouponResponse,
      { code: string; update: Partial<ICoupon> }
    >({
      query: ({ code, update }) => ({
        url: `/coupon/update/${code}`,
        method: "PUT",
        body: update,
      }),
      invalidatesTags: ["coupons"],
    }),
    // Delete a coupon
    deleteCoupon: builder.mutation<void, string>({
      query: (code) => ({
        url: `/coupon/delete/${code}`,
        method: "DELETE",
      }),
      invalidatesTags: ["coupons"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllCouponsQuery,
  useGetCouponByCodeQuery,
  useCreateCouponMutation,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
} = couponApi;
