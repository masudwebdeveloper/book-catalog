import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search/searchSlice";
import filterReducer from "./features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    filter: filterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
