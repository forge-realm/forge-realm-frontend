"use client"
import { Nft } from "@/data/nft"

export default function Card({ nft }: { nft: Nft }) {
  return (
    <div
      className="bg-white w-[350px] h-[450px] rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
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
        <span className="text-black-bg">By {nft.creator.name}</span>
        <span className="font-bold text-pink-bg">{nft.price}</span>
      </div>
      <button
        disabled={nft.status !== "On Sale"}
        className={`mt-auto py-2 px-4 rounded-lg text-sm font-semibold transition ${nft.status === "On Sale"
          ? "bg-pink-bg text-white hover:bg-btn-bg"
          : "bg-gray-200 text-black-bg cursor-not-allowed"
          }`}
      >
        {nft.status === "On Sale" ? "Buy Now" : "Not Available"}
      </button>
    </div>
  )
}