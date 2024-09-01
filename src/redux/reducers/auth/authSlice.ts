import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/user";
import { setSession } from "../../../utils/auth-utils";

interface AuthState {
  user: IUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  role: "ADMIN" | "USER" | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  authLoading: false,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.authLoading = false;
      state.accessToken = "";
      state.user = null;
      setSession(null);
      localStorage.clear();
    },
    setToken: (state, action: PayloadAction<string>) => {
      setSession(action.payload);
      state.accessToken = action.payload;
    },
    setRole: (state, action: PayloadAction<"ADMIN" | "USER" | null>) => {
      state.role = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
      state.authLoading = false;
      state.isAuthenticated = true;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.authLoading = action.payload;
    },
  },
});

export const { logout, setUser, setAuthLoading, setToken, setRole } =
  authSlice.actions;

export default authSlice.reducer;
