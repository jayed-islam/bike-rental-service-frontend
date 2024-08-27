import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.VITE_SERVER_API}/api/`,
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
