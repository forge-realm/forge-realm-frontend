"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { type Nft, nfts } from "@/data/nft";
import { truncateWalletAddress } from "@/utils/forge-realm";

export default function NFTDetailPage() {
  const router = useRouter();
  const [nft, setNft] = useState<Nft | null>(null);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const id = pathname.split("/").pop();
    const nftData = nfts.find((n: Nft) => n.token_id === id);
    setNft(nftData || null);
  }, []);

  if (!mounted) {
    return (
      <div className="flex pt-28 items-center justify-center min-h-screen">
        <span>Loading...</span>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="flex pt-28 flex-col items-center justify-center min-h-screen w-full px-4">
        <p className="text-lg text-gray-700 mb-4">NFT not found.</p>
        <button
          className="px-4 py-2 rounded bg-pink-bg text-white font-semibold"
          onClick={() => router.push("/dashboard/marketplace")}
        >
          Back to Marketplace
        </button>
      </div>
    );
  }

  // Helper to render NFT attributes
  function renderAttributes(attributes?: any) {
    if (!attributes || !Array.isArray(attributes) || attributes.length === 0)
      return (
        <div className="text-gray-400">No attributes available for this NFT.</div>
      );
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {attributes.map((attr: any, i: number) => (
          <div
            key={attr.trait_type ? attr.trait_type : i}
            className="flex flex-col bg-gray-100 rounded-xl p-4 shadow-sm"
          >
            <span className="text-xs text-gray-500 uppercase truncate">
              {attr.trait_type || "Attribute"}
            </span>
            <span className="font-medium text-base text-gray-700 truncate">
              {attr.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Helper for listing out all NFT properties
  function renderOtherDetails(nft: Nft) {
    const EXCLUDE = [
      "image",
      "name",
      "creator",
      "description",
      "token_id",
      "price",
      "status",
      "attributes",
    ];
    return (
      <div className="flex flex-col gap-2">
        {Object.entries(nft)
          .filter(([k]) => !EXCLUDE.includes(k))
          .map(([key, val]) => (
            <div key={key} className="flex gap-1 text-sm text-gray-600 flex-wrap">
              <span className="font-medium capitalize">{key.replace(/_/g, " ")}:</span>
              <span className="font-mono break-all">
                {typeof val === "string" || typeof val === "number"
                  ? val
                  : JSON.stringify(val)}
              </span>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="flex pt-28 flex-col md:flex-row gap-12 w-full max-w-5xl mx-auto px-4 md:px-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-xs aspect-square flex items-center justify-center">
          <img
            src={nft.image}
            alt={nft.name}
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        {/* Show main info below image for mobile only */}
        <div className="md:hidden w-full flex flex-col gap-2 pt-4">
          <span className="text-sm text-gray-400">
            {nft.status === "On Sale" ? "Available" : "Not Available"}
          </span>
          <h1 className="text-2xl font-bold">{nft.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-base">By</span>
            <span className="font-semibold">{nft.creator?.name}</span>
          </div>
          <span className="text-gray-500 text-xs">Token ID: {nft.token_id}</span>
        </div>
      </div>
      {/* Details Section */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top area for desktop */}
        <div className="hidden md:block">
          <span className="text-sm text-gray-400 mb-1">
            {nft.status === "On Sale" ? "Available" : "Not Available"}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{nft.name}</h1>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-gray-500 text-base">By</span>
            <span className="font-semibold">{nft.creator?.name}</span>
          </div>
          <span className="text-gray-500 text-xs mb-4 block">Token ID: {nft.token_id}</span>
        </div>
        {/* Creator details if available */}
        {nft.creator &&
          (typeof nft.creator === "object") && (
            <div className="mb-3 flex items-center gap-3">
              <span className="text-sm font-mono text-gray-500 break-all">
                {truncateWalletAddress(nft.creator.wallet)}
              </span>
            </div>
          )
        }
        {/* Description */}
        <p className="text-gray-700 text-lg mb-6 wrap-break-word">{nft.description}</p>
        {/* Price and Status */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm mb-1">Price</span>
            <span className="text-2xl font-bold text-pink-bg">{nft.price}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm mb-1">Status</span>
            <span className={`font-semibold text-base ${nft.status === "On Sale" ? "text-green-600" : "text-gray-500"}`}>{nft.status}</span>
          </div>
        </div>
        {/* Attributes */}
        <div className="mt-4 mb-8">
          <h3 className="font-semibold text-lg mb-2 text-gray-700">Attributes</h3>
          {renderAttributes(nft.attributes)}
        </div>
        {/* Other NFT information */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-2 text-gray-700">Other Details</h3>
          {renderOtherDetails(nft)}
        </div>
        {/* Action Buttons */}
        <button
          disabled={nft.status !== "On Sale"}
          className={`w-full md:w-1/2 py-3 px-6 rounded-xl text-lg font-semibold transition ${
            nft.status === "On Sale"
              ? "bg-pink-bg text-white hover:bg-[#5f3bc0] cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          } mb-4`}
        >
          {nft.status === "On Sale" ? "Buy Now" : "Not Available"}
        </button>
        <button
          className="underline mt-2 text-pink-bg"
          onClick={() => router.push("/dashboard/marketplace")}
        >
          &larr; Back to Marketplace
        </button>
      </div>
    </div>
  );
}

