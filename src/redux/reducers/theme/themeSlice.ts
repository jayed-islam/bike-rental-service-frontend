import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: "dark" | "light";
}

const initialState: ThemeState = {
  theme: (localStorage.getItem("theme") as "dark" | "light") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.theme);
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
    setTheme(state, action: PayloadAction<"dark" | "light">) {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
