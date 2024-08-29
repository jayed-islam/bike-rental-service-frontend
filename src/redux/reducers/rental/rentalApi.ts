import { IGetAllRentalResponse } from "../../../types/rental";
import { api } from "../../api";

interface RentalQueryPram {
  isReturned: boolean;
}

export const rentalsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllRentalsForUser: builder.query<IGetAllRentalResponse, RentalQueryPram>(
      {
        query: (body) => ({
          url: "/rentals/get-rental-list",
          method: "POST",
          body,
        }),
        providesTags: ["rentals"],
      }
    ),
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

export const { useGetAllRentalsForUserQuery } = rentalsApi;
