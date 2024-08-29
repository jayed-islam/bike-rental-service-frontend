import { IGetAllRentalResponse } from "../../../types/rental";
import { api } from "../../api";

interface RentalQueryPram {
  isReturned: boolean;
}

interface MakeReturnQuery {
  id: string;
  endTime: string;
}

export const rentalsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllRentalsForUser: builder.query<IGetAllRentalResponse, RentalQueryPram>(
      {
        query: (body) => ({
          url: "/rentals/get-user-rental-list",
          method: "POST",
          body,
        }),
        providesTags: ["rentals"],
      }
    ),
    getAllRentals: builder.query<IGetAllRentalResponse, void>({
      query: (body) => ({
        url: "/rentals/get-rentals",
        method: "GET",
        body,
      }),
      providesTags: ["rentals"],
    }),

    makeBikeReturn: builder.mutation<IGetAllRentalResponse, MakeReturnQuery>({
      query: ({ id, endTime }) => ({
        url: `/rentals/${id}/return`,
        method: "PUT",
        body: { endTime },
      }),
      invalidatesTags: ["rentals"],
    }),
    // getSingleBike: builder.query<IGetSingleBikeResponse, string>({
    //   query: (id) => ({
    //     url: `/bikes/get-single/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["single-bike"],
    // }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllRentalsForUserQuery,
  useGetAllRentalsQuery,
  useMakeBikeReturnMutation,
} = rentalsApi;
