import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["Books", "Rivews"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
      providesTags: ["Books"],
    }),
    getBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ["Books", "Rivews"],
      keepUnusedDataFor: 600,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/book/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Rivews"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBookQuery,
  useDeleteBookMutation,
  useEditBookMutation,
  useAddReviewMutation,
} = api;
