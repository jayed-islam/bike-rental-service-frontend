import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.VITE_SERVER_API}/api/`,
    prepareHeaders: async (headers) => {
      const accessToken = localStorage?.getItem("accessToken");
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "products",
    "single-product",
    "user-me",
    "available-bike",
    "bikes",
    "single-bike",
  ],
  endpoints: () => ({}),
});
