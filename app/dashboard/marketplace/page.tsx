"use client";

import { type Nft, nfts } from "@/data/nft";
import Card from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

const nftData: Nft[] = nfts.slice(0, 12);

const filterOptions = [
  { label: "All", value: "all" },
  { label: "On Sale", value: "On Sale" },
  { label: "Owned", value: "Owned" },
];

export default function MarketplacePage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredNfts = nftData.filter(
    (nft) =>
      (filter === "all" || nft.status === filter) &&
      nft.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full min-h-screen pt-28 pb-12 px-4 md:px-10 bg-gray-50">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">NFT Marketplace</h1>
          <p className="text-gray-500 text-base">Discover, collect, and buy unique NFTs from creators.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search NFTs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-bg transition"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filterOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-4 py-1.5 rounded-lg border text-sm font-medium transition ${filter === opt.value
                ? "bg-pink-bg text-white border-pink-bg"
                : "bg-white text-gray-700 border-gray-200 hover:border-pink-bg"
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* NFTs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredNfts.length > 0 ? (
          filteredNfts.map((nft, idx) => (
            <Link href={`/dashboard/marketplace/${nft.token_id}`} key={nft.name + idx}>
              <Card nft={nft} />
            </Link>
          ))
        ) : (
          <div className="col-span-full text-gray-500 text-center py-12">
            No NFTs found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
