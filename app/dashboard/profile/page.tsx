"use client"

import Card from "@/components/ui/card";
import { useState } from "react";
import { nfts } from "@/data/nft";

// Dummy wallet address and NFTs (replace with real data in actual implementation)
const walletAddress = "0x12cD...a1bc";
const userStats = [
  { label: "NFTs Owned", value: 24 },
  { label: "NFTs Sold", value: 12 },
  { label: "Followers", value: 1320 },
  { label: "Following", value: 104 },
];


export default function ProfilePage() {
  const [tab, setTab] = useState<"collection" | "activity">("collection");

  return (
    <div className="flex flex-col gap-8 w-full pt-24 pb-8 font-raleway">
      {/* Profile Header */}
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
        <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold tracking-tight text-gray-900 break-all">
              {walletAddress}
            </span>
            <button
              type="button"
              className="px-3 py-1 text-sm font-medium text-pink-bg border border-pink-bg rounded-full hover:bg-pink-bg hover:text-white transition"
              onClick={() => navigator.clipboard.writeText(walletAddress)}
            >
              Copy
            </button>
          </div>
          {/* You could put a username, bio or ENS here if available */}
        </div>
        <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center w-full sm:w-auto">
          {userStats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center min-w-[70px]">
              <span className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full flex gap-2 mt-4 border-b border-gray-200 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setTab("collection")}
          className={`px-5 py-2 text-base font-semibold whitespace-nowrap rounded-t-lg transition ${
            tab === "collection"
              ? "border border-b-0 border-pink-bg text-pink-bg"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
        >
          Collection
        </button>
        <button
          onClick={() => setTab("activity")}
          className={`px-5 py-2 text-base font-semibold whitespace-nowrap rounded-t-lg transition ${
            tab === "activity"
              ? "bg-white border border-b-0 border-pink-bg text-pink-bg"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
        >
          Activity
        </button>
      </div>

      {/* Tab content */}
      <div className="rounded-xl text-parchment-white p-4 sm:p-6 shadow w-full min-h-[250px]">
        {tab === "collection" && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">Collected NFTs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {nfts.slice(0, 3).map((nft, idx) => (
                <Card nft={nft} key={idx} />
              ))}
            </div>
          </div>
        )}
        {tab === "activity" && (
          <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-500">
            <p className="text-base sm:text-lg">No recent activity yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
