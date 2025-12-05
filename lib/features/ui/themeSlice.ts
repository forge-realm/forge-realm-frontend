import { createSlice } from "@reduxjs/toolkit";
import type { Theme } from "@/interface/ui";


export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light' as Theme,
  },
  reducers: {
    setTheme(state, action: { payload: Theme }) {
      state.theme = action.payload;
    }
  }
})

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;