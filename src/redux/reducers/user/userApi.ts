import {
  IGetAllUserResponse,
  IGetSingleUserResponse,
} from "../../../types/user";
import { api } from "../../api";

interface IUpdateUser {
  role: "ADMIN" | "USER";
  email: string;
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query<IGetAllUserResponse, void>({
      query: () => ({
        url: "/user/get-all",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateUserRole: builder.mutation<IGetSingleUserResponse, IUpdateUser>({
      query: ({ email, role }) => ({
        url: `/user/${email}/make-admin`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation<IGetSingleUserResponse, string>({
      query: (email) => ({
        url: `/user/delete/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllUserQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} = userApi;
