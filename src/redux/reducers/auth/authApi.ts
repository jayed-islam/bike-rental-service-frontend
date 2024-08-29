/* eslint-disable @typescript-eslint/no-unused-vars */
import { setAuthLoading, setUser } from "./authSlice";
import { api } from "../../api";
import {
  IAuthLoginResponse,
  IGetAllUserResponse,
  IGetMeResponse,
  IUser,
  LoginRequest,
} from "../../../types/user";
import { AccountFromData } from "../../../sections/account/validation";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation<IAuthLoginResponse, AccountFromData>({
      query: (credentials) => ({
        url: "/user/update",
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["user-me"],
    }),
    loginUser: builder.mutation<IAuthLoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["user-me"],
    }),

    createUser: builder.mutation<IAuthLoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["user-me"],
    }),

    getMe: builder.query<IGetMeResponse, void>({
      query: () => ({
        url: "/user/me",
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

export const {
  useCreateUserMutation,
  useGetMeQuery,
  useLoginUserMutation,
  useUpdateUserProfileMutation,
} = authApi;
