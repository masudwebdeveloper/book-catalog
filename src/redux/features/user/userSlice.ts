import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";
import type { PayloadAction } from "@reduxjs/toolkit";
interface ICredential {
  email: string;
  password: string;
}
interface IUser {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}
const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: undefined,
};
export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);

    return data.user.email;
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: ICredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);

    return data.user.email;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = undefined;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload;
        state.isError = false;
        state.error = undefined;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user.email = null;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = undefined;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload;
        state.isError = false;
        state.error = undefined;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user.email = null;
        state.error = action.error.message;
      });
  },
});
export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
