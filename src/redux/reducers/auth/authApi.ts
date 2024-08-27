/* eslint-disable @typescript-eslint/no-unused-vars */
import { setAuthLoading, setUser } from "./authSlice";
import { api } from "../../api";
import {
  IAuthLoginResponse,
  IGetMeResponse,
  IUser,
  LoginRequest,
} from "../../../types/user";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation<IAuthLoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["user-me"],
    }),

    getMe: builder.query<IGetMeResponse, void>({
      query: () => ({
        url: "/admin/me",
        method: "GET",
      }),
      providesTags: ["user-me"],

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setAuthLoading(true));
        try {
          const { data } = await queryFulfilled;
          if (data?.data) {
            const updatedData: IUser = Object.fromEntries(
              Object.entries(data.data).filter(
                ([_, value]) => value !== null && value !== undefined
              )
            ) as IUser;
            dispatch(setUser(updatedData));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useAdminLoginMutation, useGetMeQuery } = authApi;
