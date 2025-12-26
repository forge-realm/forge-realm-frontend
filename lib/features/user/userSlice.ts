import { Nft } from "@/data/nft";
import { provider } from "@/utils/pushchain";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseNftContractAddress, traitNftContractAddress } from "@/contract/address";
import baseAbi from "@/contract/abi/BaseNFT.json";
import traitAbi from "@/contract/abi/TraitNFT.json";
import { Contract } from "ethers";

interface User {
  walletAddress: `0x${string}` | null | string,
  userBaseNfts: Nft[],
  error: string | null,
}

const initialState: User = {
  walletAddress: null,
  userBaseNfts: [],
  error: null,
}

export const getUserBaseNfts = createAsyncThunk(
  "user/fetchBaseNfts", // Use a unique string identifier
  async (walletAddress: string, { rejectWithValue }) => {
    try {
      if (!walletAddress) throw new Error("No wallet address provided");

      const baseNftContract = new Contract(baseNftContractAddress, baseAbi, provider);
      const nextId = await baseNftContract.nextId();
      const totalTokens = Number(nextId);

      // Create an array of IDs to check
      const ids = Array.from({ length: totalTokens }, (_, i) => i + 1);

      // Map IDs to promises to run them in parallel
      const nftPromises = ids.map(async (i) => {
        try {
          const owner = await baseNftContract.ownerOf(i);
          if (owner.toLowerCase() !== walletAddress.toLowerCase()) return null;

          const uri = await baseNftContract.tokenURI(i);
          const res = await fetch(uri).then((r) => r.json());
          return { ...res, uri, price: 0.01, owner: {wallet: walletAddress}, token_id: i };
        } catch (e) {
          return null; // Skip failed fetches or burned tokens
        }
      });

      const results = await Promise.all(nftPromises);
      
      // Filter out the nulls (tokens not owned by user)
      const userBaseNfts = results.filter((nft): nft is Nft => nft !== null);

      console.log("Found NFTs:", userBaseNfts);
      return userBaseNfts;

    } catch (err) {
      console.error("Thunk Error:", err);
      return rejectWithValue(err instanceof Error ? err.message : String(err));
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    walletConnected(state, action: {payload: `0x${string}` | string}) {
      state.walletAddress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUserBaseNfts.rejected, (state, action)  => {
      state.userBaseNfts = [];
      state.error = typeof action.payload === "string" ? action.payload : String(action.payload)
    })
    .addCase(getUserBaseNfts.fulfilled, (state, action) => {
      state.error = null;
      console.log(action.payload)
      state.userBaseNfts = action.payload;
    })
  }
})

export const {walletConnected} = userSlice.actions;
export default userSlice.reducer;