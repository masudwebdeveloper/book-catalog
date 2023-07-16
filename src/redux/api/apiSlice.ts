import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["Books", "Rivews"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search, genre, publication }) => {
        // let queryString = `/book?searchTerm=${search}`;
        // if (genre && !publication) {
        //   queryString = `/book?searchTerm=${search}&genre=${genre}`;
        // } else if (publication && !genre) {
        //   queryString = `/book?searchTerm=${search}&publication=${publication}`;
        // } else if (genre && publication) {
        //   queryString = `/book?searchTerm=${search}&genre=${genre}publication=${publication}`;
        // }
        const queryString = `/book?searchTerm=${encodeURIComponent(search)}${genre ? `&genre=${encodeURIComponent(genre)}` : ''}${publication ? `&publication=${encodeURIComponent(publication)}` : ''}`;
        return queryString;
      },
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
