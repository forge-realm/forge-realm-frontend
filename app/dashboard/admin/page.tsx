"use client";

import React, { useState } from "react";
import { inter, raleway } from "@/lib/fonts";
import Link from "next/link";

function AdminPage() {
  const statsItems = [
    {
      label: "Total Games",
      value: "5",
      valueClassName: "font-monospace",
    },
    {
      label: "Total NFTs",
      value: "18",
      valueClassName: "",
    },
    {
      label: "Total Creators",
      value: "120",
      valueClassName: "",
    },
    {
      label: "Total Users",
      value: "8,710",
      valueClassName: "",
    },
  ]
  // State for game form
  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState("");
  const [games, setGames] = useState<{ name: string; description: string }[]>([]);

  // State for NFT form
  const [nftName, setNftName] = useState("");
  const [nftImageUrl, setNftImageUrl] = useState("");
  const [nfts, setNfts] = useState<{ name: string; imageUrl: string }[]>([]);

  // Add handlers
  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameName.trim() && gameDescription.trim()) {
      setGames([...games, { name: gameName, description: gameDescription }]);
      setGameName("");
      setGameDescription("");
    }
  };
  const handleAddNft = (e: React.FormEvent) => {
    e.preventDefault();
    if (nftName.trim() && nftImageUrl.trim()) {
      setNfts([...nfts, { name: nftName, imageUrl: nftImageUrl }]);
      setNftName("");
      setNftImageUrl("");
    }
  };

  // Color scheme classes, replace with proper ones if using a theme provider or context.

  return (
    <div className="pt-28 md:px-10 px-5 flex flex-wrap gap-8 text-parchment-white">
      <section
        className={`flex md:flex-nowrap flex-wrap gap-8 justify-between mb-8 w-full ${raleway.className}`}
      >
        {/* Hero Text */}
        <div className="p-12 rounded-[16px] md:w-[60%] w-full h-fit bg-[url(/assets/images/gradient-bg.png)] bg-no-repeat bg-cover bg-bottom-right">
          <h1 className="text-3xl md:text-6xl leading-[120%] font-bold mb-3">
            Admin Dashboard
          </h1>
          <p className="mb-6 text-base md:text-lg">
            Manage and oversee the Forge Realm platform. Add new games, create NFTs, monitor system activity, and administer users and assets from a unified interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/dashboard/marketplace"
              className="px-6 py-3 bg-pink-bg text-white text-base font-semibold rounded-full shadow-md hover:bg-btn-bg transition"
            >
              Go to Marketplace
            </Link>
            <Link
              href="/dashboard/profile"
              className="px-6 py-3 bg-parchment-white hover:bg-cream-bg transition-all text-pink-bg border border-pink-bg text-base font-semibold rounded-full shadow-md"
            >
              View Profile
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap md:justify-start justify-center gap-6 md:w-[40%] w-full h-full text-parchment-white">
          {/* Total Earnings from NFT Sales */}
          {statsItems.map((item, index) => (
            <div
              key={index}
              className="bg-midnight-ink backdrop-blur-sm rounded-[16px] border border-gray-900 p-6 md:w-[45%] w-[250px]"
            >
              <p className="text-lg font-semibold mb-2">{item.label}</p>
              <p
                className={`
                ${inter.className}
                ${item.valueClassName}
                text-pink-bg text-5xl font-bold
              `}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Forms */}
      <section className="grid md:grid-cols-2 w-full gap-8">
        {/* Add Game Form - Enhanced Design */}
        <div className={`relative overflow-hidden rounded-2xl shadow-xl p-8 flex flex-col gap-4`}>
          <div className="absolute inset-0 pointer-events-none opacity-25 bg-linear-to-br from-pink-400 via-fuchsia-600 to-purple-900 blur-2xl" />
          <h2 className={`relative z-10 text-2xl font-bold mb-2`}>
            <span className="inline-block align-middle mr-2">🎮</span> Add New Game
          </h2>
          <p className="relative z-10 text-cream-bg text-sm mb-4">Fill in the details below to add a new game to Forge Realm. All fields are required.</p>
          <form onSubmit={handleAddGame} className="relative z-10 flex flex-col gap-6">
            <div>
              <label className="block text-base font-semibold mb-2 tracking-wide" htmlFor="game-name">
                Game Name
              </label>
              <input
                id="game-name"
                type="text"
                placeholder="Enter game name"
                className={`border rounded-lg px-4 py-3 w-full outline-none bg-background focus:border-pink-bg focus:ring-2 focus:ring-pink-bg text-base transition`}
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 tracking-wide" htmlFor="game-description">
                Description
              </label>
              <textarea
                id="game-description"
                placeholder="Briefly describe your game..."
                className={`border rounded-lg px-4 py-3 w-full outline-none bg-background focus:border-pink-bg focus:ring-2 focus:ring-pink-bg text-base transition`}
                value={gameDescription}
                onChange={(e) => setGameDescription(e.target.value)}
                required
                rows={4}
              />
            </div>
            <button
              type="submit"
              className={`mt-2 rounded-full bg-pink-bg hover:bg-btn-bg transition text-white font-bold py-3 px-8 shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-bg/50`}
            >
              <span className="inline-block align-middle mr-2">➕</span> Add Game
            </button>
          </form>
        </div>

        {/* Add NFT Form - Enhanced Design */}
        <div className={`relative overflow-hidden rounded-2xl shadow-xl p-8 flex flex-col gap-4`}>
          <div className="absolute inset-0 pointer-events-none opacity-25 bg-linear-to-br from-orange-400 via-pink-500 to-purple-800 blur-2xl" />
          <h2 className={`relative z-10 text-2xl font-bold mb-2`}>
            <span className="inline-block align-middle mr-2">🖼️</span> Add New NFT
          </h2>
          <p className="relative z-10 text-cream-bg text-sm mb-4">Create a new NFT to expand your game universe. Enter the NFT details below.</p>
          <form onSubmit={handleAddNft} className="relative z-10 flex flex-col gap-6">
            <div>
              <label className="block text-base font-semibold mb-2 tracking-wide" htmlFor="nft-name">
                NFT Name
              </label>
              <input
                id="nft-name"
                type="text"
                placeholder="Enter NFT name"
                className={`border rounded-lg px-4 py-3 w-full outline-none bg-background focus:border-pink-bg focus:ring-2 focus:ring-pink-bg text-base transition`}
                value={nftName}
                onChange={(e) => setNftName(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2 tracking-wide" htmlFor="nft-image-url">
                Image URL
              </label>
              <input
                id="nft-image-url"
                type="url"
                placeholder="https://example.com/nft-image.png"
                className={`border rounded-lg px-4 py-3 w-full outline-none bg-background focus:border-pink-bg focus:ring-2 focus:ring-pink-bg text-base transition`}
                value={nftImageUrl}
                onChange={(e) => setNftImageUrl(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            {/* Optional future: Preview image */}
            {nftImageUrl && (
              <div className="mt-1 mb-2 flex justify-center">
                <img
                  src={nftImageUrl}
                  alt="NFT preview"
                  className="max-h-32 rounded-lg border-2 border-cream-bg shadow object-contain bg-white"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            )}
            <button
              type="submit"
              className={`mt-2 rounded-full bg-pink-bg hover:bg-btn-bg transition text-white font-bold py-3 px-8 shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-bg/50`}
            >
              <span className="inline-block align-middle mr-2">🪙</span> Add NFT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
