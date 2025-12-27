"use client"

import Card from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Nft, nfts } from "@/data/nft";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

const userStats = [
  { label: "NFTs Owned", value: 24 },
  { label: "Base NFTs", value: 12 },
  { label: "Assets NFTs", value: 1320 },
  { label: "Games", value: 4 },
];

const games = [
  { id: "all", name: "All Games" }, // you can keep or omit "All Games" here
  { id: "game-1", name: "Elden Realms" },
  { id: "game-2", name: "Mystic Forge" },
  { id: "game-3", name: "Crypto Saga" }
  // Add more games as needed
];




export default function ProfilePage() {
  const [tab, setTab] = useState<"base" | "assets" | "composites">("base");
  const [selectedGame, setSelectedGame] = useState("all");

  const userBaseNfts = useAppSelector((state) => state.user.userBaseNfts);
  const userAssetNfts = useAppSelector((state) => state.user.userAssetNfts);
  const userCompositeNfts: Nft[] = [];

  // To filter NFTs by game:
  // const filteredNfts = selectedGame === "all" ? nfts : nfts.filter(nft => nft.gameId === selectedGame);

  return (
    <div className="pt-28 md:px-10 px-5 flex flex-wrap gap-8 text-parchment-white">
      <section
        className={`flex md:flex-nowrap flex-wrap gap-8 justify-between mb-8 w-full font-raleway`}
      >
        {/* Hero Text */}
        <div className="p-12 rounded-[16px] md:w-[60%] w-full min-h-[380px] bg-[url(/assets/images/gradient-bg.png)] bg-no-repeat bg-cover bg-bottom-right flex flex-col justify-center">
          <h1 className="text-3xl md:text-6xl leading-[120%] font-bold mb-3">
            Your NFT Profile Overview
          </h1>
          <p className="mb-6 text-base md:text-lg">
            View your NFT collection and track your progress as a creator, collector, and trader in the Forge Realm marketplace.<br />
            Analyze your earnings, sales, and portfolio value—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/dashboard/marketplace"
              className="px-6 py-3 bg-pink-bg text-white text-base font-semibold rounded-full shadow-md hover:bg-btn-bg transition"
            >
              Go to Marketplace
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-white hover:bg-cream-bg transition-all text-pink-bg border border-pink-bg text-base font-semibold rounded-full shadow-md"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap md:justify-start justify-center gap-6 md:w-[40%] w-full h-full text-parchment-white">
          {/* Total Earnings from NFT Sales */}
          {userStats.map((item, index) => (
            <div
              key={index}
              className="bg-midnight-ink backdrop-blur-sm rounded-[16px] border border-gray-900 p-6 md:w-[45%] w-[250px]"
            >
              {/* <p className="text-lg font-semibold mb-2">{item.label}</p> */}
              <p
                className={`
                text-pink-bg text-7xl font-bold
              `}
              >
                {item.value}
              </p>
              <p className="mt-2 text-cream-bg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-8 w-full pb-8 font-raleway">
        {/* Profile Header */}
        {/* <div className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
          <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold tracking-tight text-parchment-white break-all">
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
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center w-full sm:w-auto">
            {userStats.map(stat => (
              <div key={stat.label} className="flex flex-col items-center min-w-[70px]">
                <span className="text-xl sm:text-2xl font-bold text-parchment-white">{stat.value}</span>
                <span className="text-xs sm:text-sm text-cream-bg/80 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Tabs */}
        <div className="w-full flex gap-2 justify-between mt-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            <button
              onClick={() => setTab("base")}
              className={`px-5 py-2 text-base font-semibold whitespace-nowrap rounded-full transition ${tab === "base"
                ? "border border-pink-bg bg-pink-bg text-cream-bg"
                : "border border-pink-bg text-pink-bg"
                }`}
            >
              Base NFTs
            </button>
            <button
              onClick={() => setTab("assets")}
              className={`px-5 py-2 text-base font-semibold whitespace-nowrap rounded-full transition ${tab === "assets"
                ? "border border-pink-bg bg-pink-bg text-cream-bg"
                : "border border-pink-bg text-pink-bg"
                }`}
            >
              Asset NFTs
            </button>
            <button
              onClick={() => setTab("composites")}
              className={`px-5 block py-2 text-base font-semibold whitespace-nowrap rounded-full transition ${tab === "composites"
                ? "border border-pink-bg bg-pink-bg text-cream-bg"
                : "border border-pink-bg text-pink-bg"
                }`}
            >
              Composite NFTs
            </button>
          </div>

          <div>
            <Link
              href="/dashboard/compose-nft"
              className={`px-5 py-2 h-[45px] flex items-center text-base font-semibold whitespace-nowrap rounded-full transition border border-pink-bg bg-parchment-white cursor-pointer hover:bg-cream-bg hover:text-btn-bg text-pink-bg`}
              aria-label="Compose a new NFT"
              title="Compose NFT"
              prefetch={false}
            >
              <span>Compose NFT</span>
            </Link>
          </div>
        </div>

        {/* Tab content */}
        <div className="rounded-xl text-parchment-white py-6 shadow w-full min-h-[250px]">
          {tab === "base" && (
            <>
              {
                userBaseNfts.length > 0 ? (
                  <div className="flex flex-wrap mb-5 sm:mb-6 gap-6">
                    <div className="w-full flex sm:items-center sm:justify-between mb-5 sm:mb-6 gap-4">
                      <h3 className="text-lg md:text-xl font-bold">Collected NFTs</h3>
                      <div className="flex items-center gap-2">
                        <label htmlFor="game-select" className="text-sm font-medium text-cream-bg">
                          Filter by Game:
                        </label>
                        <select
                          id="game-select"
                          className="px-3 py-1.5 rounded-md bg-midnight-ink text-parchment-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-bg transition"
                          value={selectedGame}
                          onChange={e => setSelectedGame(e.target.value)}
                        >
                          {games.map(game => (
                            <option value={game.id} key={game.id}>
                              {game.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {userBaseNfts.map((nft, idx) => (
                      <Card nft={nft} key={idx} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[200px] text-cream-bg">
                    <p className="text-base sm:text-lg">No recent activity yet.</p>
                  </div>
                )
              }
            </>
          )}
          {tab === "assets" && (
            <>
              {
                userAssetNfts.length > 0 ? (
                  <div className="flex flex-wrap mb-5 sm:mb-6 gap-6">
                    <div className="w-full flex sm:items-center sm:justify-between mb-5 sm:mb-6 gap-4">
                      <h3 className="text-lg md:text-xl font-bold">Collected NFTs</h3>
                      <div className="flex items-center gap-2">
                        <label htmlFor="game-select" className="text-sm font-medium text-cream-bg">
                          Filter by Game:
                        </label>
                        <select
                          id="game-select"
                          className="px-3 py-1.5 rounded-md bg-midnight-ink text-parchment-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-bg transition"
                          value={selectedGame}
                          onChange={e => setSelectedGame(e.target.value)}
                        >
                          {games.map(game => (
                            <option value={game.id} key={game.id}>
                              {game.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {userAssetNfts.map((nft, idx) => (
                      <Card nft={nft} key={idx} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[200px] text-cream-bg">
                    <p className="text-base sm:text-lg">No recent activity yet.</p>
                  </div>
                )
              }
            </>
          )}

          {tab === "composites" && (
            <>
              {
                userCompositeNfts.length > 0 ? (
                  <div className="flex flex-wrap mb-5 sm:mb-6 gap-6">
                    <div className="w-full flex sm:items-center sm:justify-between mb-5 sm:mb-6 gap-4">
                      <h3 className="text-lg md:text-xl font-bold">Collected NFTs</h3>
                      <div className="flex items-center gap-2">
                        <label htmlFor="game-select" className="text-sm font-medium text-cream-bg">
                          Filter by Game:
                        </label>
                        <select
                          id="game-select"
                          className="px-3 py-1.5 rounded-md bg-midnight-ink text-parchment-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-bg transition"
                          value={selectedGame}
                          onChange={e => setSelectedGame(e.target.value)}
                        >
                          {games.map(game => (
                            <option value={game.id} key={game.id}>
                              {game.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {userCompositeNfts.map((nft, idx) => (
                      <Card nft={nft} key={idx} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[200px] text-cream-bg">
                    <p className="text-base sm:text-lg">No recent activity yet.</p>
                  </div>
                )
              }
            </>
          )}
        </div>
      </div>
    </div >
  );
}
