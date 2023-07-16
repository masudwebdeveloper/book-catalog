import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface IFilter {
  genre: string;
  publication: string;
}
const initialState: IFilter = {
  genre: "",
  publication: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublication: (state, action: PayloadAction<string>) => {
      state.publication = action.payload;
    },
  },
});

export const { setGenre, setPublication } = filterSlice.actions;
export default filterSlice.reducer;
