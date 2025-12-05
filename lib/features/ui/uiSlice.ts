import { createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "@/interface/ui";

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loadingState: 'none' as LoadingState
  },
  reducers: {
    setLoadingState(state, action: {payload: LoadingState}) {
      state.loadingState = action.payload;
    }
  }
})

export const {setLoadingState} = uiSlice.actions;
export default uiSlice.reducer;