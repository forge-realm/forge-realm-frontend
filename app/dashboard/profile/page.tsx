"use client"

import { useState } from "react";
import Image from "next/image";

// Dummy wallet address and NFTs (in real use, fetch wallet address from connected user context)
const walletAddress = "0x12cD...a1bc";
const userStats = [
  { label: "NFTs Owned", value: 24 },
  { label: "NFTs Sold", value: 12 },
  { label: "Followers", value: 1320 },
  { label: "Following", value: 104 },
];

const avatar =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80";

const nfts = [
  {
    name: "Galactic Dream",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
    price: "1.2 ETH",
    status: "On Sale",
  },
  {
    name: "Synthwave Cat",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
    price: "0.7 ETH",
    status: "Owned",
  },
  {
    name: "Neon Isles",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80",
    price: "1.8 ETH",
    status: "On Sale",
  },
  {
    name: "Pixel Persona",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
    price: "0.6 ETH",
    status: "Owned",
  },
];

export default function ProfilePage() {
  const [tab, setTab] = useState<"collection" | "activity">("collection");

  return (
    <div className="flex flex-col gap-6 w-full pt-24 pb-8 px-2 sm:px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Banner */}
      <div className="relative rounded-2xl overflow-hidden w-full h-40 sm:h-56 md:h-72 lg:h-80 mb-20">
        <Image
          src="/assets/images/gradient-bg.png"
          alt="Profile banner"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Avatar */}
        <div className="absolute left-1/2 bottom-0 sm:left-16 sm:transform-none -translate-x-1/2 sm:translate-x-0 translate-y-1/2 flex items-end z-10">
          <img
            src={avatar}
            alt="Avatar"
            className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-xl bg-gray-100 object-cover"
          />
        </div>
      </div>

      {/* Profile section: wallet address and actions | Stats */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-[-60px] gap-6 sm:gap-8 px-2">
        {/* Left: Wallet address and actions */}
        <div className="flex flex-col items-center md:items-start flex-1 gap-4">
          <div className="flex flex-col xs:flex-row items-center gap-2">
            <span className="text-lg md:text-2xl font-semibold text-gray-900 break-all tracking-tight px-2 py-1 rounded bg-gray-50/80 border border-gray-100 select-all">
              {walletAddress}
            </span>
            <button
              type="button"
              className="mt-1 xs:mt-0 ml-0 xs:ml-2 px-3 py-1 text-sm font-medium text-pink-bg border border-pink-bg rounded-full hover:bg-pink-bg hover:text-white transition"
              onClick={() => navigator.clipboard.writeText(walletAddress)}
            >
              Copy
            </button>
          </div>
          {/* Optionally, show an "Edit profile", "Share", or "more" button(s) here */}
        </div>
        {/* Right: Stats */}
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center">
          {userStats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center min-w-[70px]">
              <span className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full flex gap-2 mt-4 border-b border-gray-200 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setTab("collection")}
          className={`px-5 py-2 text-base font-semibold whitespace-nowrap rounded-t-lg ${
            tab === "collection"
              ? "bg-white border border-b-0 border-pink-bg text-pink-bg"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
        >
          Collection
        </button>
        <button
          onClick={() => setTab("activity")}
          className={`px-5 py-2 text-base font-semibold whitespace-nowrap rounded-t-lg ${
            tab === "activity"
              ? "bg-white border border-b-0 border-pink-bg text-pink-bg"
              : "bg-gray-100 text-gray-700 hover:bg-white"
          }`}
        >
          Activity
        </button>
      </div>

      {/* Tab content */}
      <div className="rounded-xl bg-white p-4 sm:p-6 shadow w-full min-h-[250px]">
        {tab === "collection" && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">Collected NFTs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {nfts.map((nft, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg bg-gray-50 transition flex flex-col h-full"
                >
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-48 xs:h-52 object-cover"
                  />
                  <div className="flex-1 p-4 flex flex-col items-start">
                    <h4 className="font-semibold text-base sm:text-lg mb-1">{nft.name}</h4>
                    <span className="text-pink-bg font-medium text-sm sm:text-base mb-2">
                      {nft.price}
                    </span>
                    <span className="text-xs rounded-full px-3 py-1 bg-pink-bg/10 text-pink-bg font-bold">
                      {nft.status}
                    </span>
                  </div>
                </div>
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
