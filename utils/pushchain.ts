import { JsonRpcProvider } from "ethers";

const rpcProvider = process.env.NEXT_PUBLIC_RPC_PROVIDER;
// const gemini = process.env.NEXT_PUBLIC_GEMINI_KEY;
// console.log(rpcProvider);
// console.log(gemini);

export const provider = new JsonRpcProvider(rpcProvider)