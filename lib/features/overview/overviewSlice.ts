import { provider } from "@/utils/pushchain";
import { baseNftContractAddress, traitNftContractAddress } from "@/contract/address";
import baseAbi from "@/contract/abi/BaseNFT.json";
import traitAbi from "@/contract/abi/TraitNFT.json";
import {formatEther, Contract} from "ethers"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type OverviewState = {
  baseBalance: number | string;
  traitBalance: number | string;
  totalBalance: number | string;
  totalCollections: number | string;
  nftsMinted: number | string;
  activeUsers: number | string,
  error: string | null;
};

const initialState: OverviewState = {
  baseBalance: 0,
  traitBalance: 0,
  totalBalance: 0,
  totalCollections: 0,
  nftsMinted: 0,
  activeUsers: 0,
  error: null,
}

export const fetchContractBalance = createAsyncThunk(
  "overview/fetchContractBalance",
  async (_, { rejectWithValue }) => {
    try {
      const baseContract = new Contract(baseNftContractAddress, baseAbi, provider);
      const traitContract = new Contract(traitNftContractAddress, traitAbi, provider);

      const [baseBalance, traitBalance] = await Promise.all([
        baseContract.getBalance(),
        traitContract.getBalance(),
      ]);

      // Convert BigNumber balances to string or ether format as needed
      return {
        baseBalance: formatEther(baseBalance),
        traitBalance: formatEther(traitBalance),
        totalBalance: formatEther(baseBalance + traitBalance),
      };
    } catch (error: any) {
      return rejectWithValue(error?.message || "Failed to fetch contract details");
    }
  }
);

export const fetchNftsMinted = createAsyncThunk("overview/fetchNftsMinted", async (_, {rejectWithValue}) => {
  try {
    const baseContract = new Contract(baseNftContractAddress, baseAbi, provider);
    const traitContract = new Contract(traitNftContractAddress, traitAbi, provider);

    const [baseId, traitId] = await Promise.all([
      baseContract.nextId(),
      traitContract.nextTypeId(),
    ]);

    return {
      baseId: String(baseId),
      traitId: String(traitId),
      totalIds: String(baseId + traitId),
    }
  } catch (err: any) {
    return rejectWithValue(err?.message || "Failed to fetch nft details")
  }
})

export const fetchAllUsers = createAsyncThunk("overview/fetchAllUsers", async (_, {rejectWithValue}) => {
  try {
    // const baseContract = new Contract(baseNftContractAddress, baseAbi, provider);
    const traitContract = new Contract(traitNftContractAddress, traitAbi, provider);

    // const [traitId] = await Promise.all([
    //   traitContract.getAllMinters(),
    // ]);
    const minters = await traitContract.getAllMinters();

    // console.log(minters)

    return {
      minters: minters.length,
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return rejectWithValue(message);
  }
})

export const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractBalance.rejected, (state, action) => {
        state.baseBalance = 0;
        state.totalBalance = 0;
        state.traitBalance = 0;
        state.error = typeof action.payload === "string" ? action.payload : String(action.payload);
      })
      .addCase(fetchContractBalance.fulfilled, (state, action) => {
        state.baseBalance = action.payload.baseBalance;
        state.totalBalance = action.payload.totalBalance;
        state.traitBalance = action.payload.traitBalance;
        state.error = null;
      })
      .addCase(fetchNftsMinted.rejected, (state, action) => {
        state.error = typeof action.payload === "string" ? action.payload : String(action.payload);
      })
      .addCase(fetchNftsMinted.fulfilled, (state, action) => {
        state.nftsMinted = action.payload.totalIds;
        state.error = null;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = typeof action.payload === "string" ? action.payload : String(action.payload);
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.activeUsers = action.payload.minters;
        state.error = null;
      })
  }
})

export const {} = overviewSlice.actions;

export default overviewSlice.reducer;