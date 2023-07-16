import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-backend-phi.vercel.app/api/v1",
  }),
  tagTypes: ["Books", "Rivews", "wishlist"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search, genre, publication }) => {
        let queryString = `/book?searchTerm=${search}`;
        if (genre && !publication) {
          queryString = `/book?searchTerm=${search}&genre=${genre}`;
        } else if (publication && !genre) {
          queryString = `/book?searchTerm=${search}&publication=${publication}`;
        } else if (genre && publication) {
          queryString = `/book?searchTerm=${search}&genre=${genre}publication=${publication}`;
        }
        // const queryString = `/book?searchTerm=${encodeURIComponent(search)}${genre ? `&genre=${encodeURIComponent(genre)}` : ''}${publication ? `&publication=${encodeURIComponent(publication)}` : ''}`;
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
    getWishlists: builder.query({
      query: (email) => `/wishlist/${email}`,
      providesTags: ["wishlist"],
    }),
    postWishlist: builder.mutation({
      query: (data) => ({
        url: `/wishlist/add_wishlist`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    editWishlist: builder.mutation({
      query: ({ id, data }) => ({
        url: `/wishlist/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
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
  useGetWishlistsQuery,
  useDeleteWishlistMutation,
  usePostWishlistMutation,
  useEditWishlistMutation,
} = api;
