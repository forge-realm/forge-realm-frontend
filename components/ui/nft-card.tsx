import { useState } from "react";
import { type Nft } from "@/data/nft";

export const NftCard = ({nft}: {nft: Nft}) => {
  const [loading, setLoading] = useState(false);

  // const handleMint = async () => {
  //   if (!onMint) return;
  //   setLoading(true);
  //   try {
  //     await onMint();
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    // <div
    //   className={`group relative bg-linear-to-br from-[#232526] to-[#414345] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform cursor-pointer flex flex-col items-center p-6 ${className}`}
    // >
    //   <div className="w-full flex justify-center">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="w-32 h-32 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
    //     />
    //   </div>
    //   <p className="mt-5 font-semibold text-lg text-white text-center">
    //     {name}
    //   </p>
    //   {/* {price !== undefined && price !== null && price !== "" && (
    //   <div className="mt-2 flex items-center gap-2">
    //     <span className="font-medium text-base text-gray-300">Price:</span>
    //     <span className="font-bold text-base text-white">
    //       {typeof price === "number" ? price.toFixed(2) : price}
    //     </span>
    //   </div>
    // )} */}
    //   {onMint && (
    //     <div className="mt-4">
    //       <button
    //         onClick={handleMint}
    //         className={`bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold px-5 py-2 rounded-lg shadow hover:brightness-110 transition ${
    //           loading ? "opacity-60 cursor-not-allowed" : ""
    //         }`}
    //         disabled={loading}
    //       >
    //         {loading ? "Minting..." : "Mint"}
    //       </button>
    //     </div>
    //   )}
    //   <div className="mt-2 w-10 h-1 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 mx-auto" />
    // </div>

    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
    >
      <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-xl">
        <img
          src={nft.image}
          alt={nft.name}
          className="object-cover w-full h-full rounded-xl transition-transform duration-200 hover:scale-105"
        />
        {nft.status === "On Sale" && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs bg-pink-bg text-white rounded-full">On Sale</span>
        )}
        {nft.status === "Owned" && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs bg-gray-300 text-gray-900 rounded-full">Owned</span>
        )}
      </div>
      <h2 className="font-semibold text-lg mb-1">{nft.name}</h2>
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="text-gray-500">By {nft.creator.name}</span>
        <span className="font-bold text-pink-bg">{nft.price}</span>
      </div>
      <button
        disabled={nft.status !== "On Sale"}
        className={`mt-auto py-2 px-4 rounded-lg text-sm font-semibold transition ${nft.status === "On Sale"
            ? "bg-pink-bg text-white hover:bg-[#5f3bc0]"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
      >
        {nft.status === "On Sale" ? "Buy Now" : "Not Available"}
      </button>
    </div>
  );
};

export default NftCard;