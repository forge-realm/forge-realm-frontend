import { createSlice } from "@reduxjs/toolkit";

interface User {
  walletAddress: `0x${string}` | null | string
}

const initialState: User = {
  walletAddress: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    walletConnected(state, action: {payload: `0x${string}` | string}) {
      state.walletAddress = action.payload;
    }
  }
})

export const {walletConnected} = userSlice.actions;
export default userSlice.reducer;