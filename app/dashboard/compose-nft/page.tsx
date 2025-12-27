"use client";

import { useState, useMemo } from "react";
import {ArrowLeft} from "lucide-react"
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { Nft } from "@/data/nft";

// Placeholder data types
type Asset = {
  id: string;
  name: string;
  image: string;
  baseNftId: string;
};

// Mock user base NFTs and related assets for demo purposes
const mockAssets: Asset[] = [
  { id: "asset1", name: "Laser Sword", image: "/images/laser-sword.png", baseNftId: "nft1" },
  { id: "asset2", name: "Iron Cape", image: "/images/iron-cape.png", baseNftId: "nft2" },
  { id: "asset3", name: "Golden Boots", image: "/images/golden-boots.png", baseNftId: "nft2" },
  { id: "asset4", name: "Magic Hat", image: "/images/magic-hat.png", baseNftId: "nft3" },
  { id: "asset5", name: "Energy Wings", image: "/images/energy-wings.png", baseNftId: "nft1" },
];

// Helper UI components
const NFTCard = ({
  nft,
  selected,
  onClick,
}: {
  nft: Nft;
  selected: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer rounded-lg shadow w-32 sm:w-36 p-2 border-2 transition ${
      selected ? "border-pink-bg" : "border-gray-500"
    } flex flex-col items-center hover:border-pink-bg bg-midnight-ink`}
    tabIndex={0}
    role="button"
    aria-pressed={selected}
  >
    <img
      src={nft.image}
      alt={nft.name}
      className="object-contain w-24 h-24 sm:w-28 sm:h-28 rounded-lg mb-2 bg-black/20"
    />
    <span className="text-xs sm:text-sm text-cream-bg text-center font-medium">{nft.name}</span>
  </div>
);

const AssetCard = ({
  asset,
  selected,
  onClick,
}: {
  asset: Nft;
  selected: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer rounded-lg shadow w-24 sm:w-28 p-2 border-2 transition ${
      selected ? "border-green-400" : "border-gray-500"
    } flex flex-col items-center hover:border-pink-bg bg-midnight-ink`}
    tabIndex={0}
    role="button"
    aria-pressed={selected}
  >
    <img
      src={asset.image}
      alt={asset.name}
      className="object-contain w-16 h-16 sm:w-20 sm:h-20 rounded-lg mb-1 bg-black/20"
    />
    <span className="text-xs text-cream-bg text-center font-medium">{asset.name}</span>
  </div>
);

// Overview composite: just overlay images for visual, simplified
const ComposedNFTDisplay = ({
  baseNft,
  assets,
}: {
  baseNft: Nft | null;
  assets: Nft[];
}) => {
  if (!baseNft) {
    return (
      <div className="w-full h-64 bg-midnight-ink flex items-center justify-center rounded-xl border border-dashed border-pink-bg/30">
        <span className="text-cream-bg/80 text-center text-md">
          Select a base NFT to start composing your character.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-64 flex flex-col items-center justify-center relative">
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
        {/* Base NFT */}
        <img
          src={baseNft.image}
          alt={baseNft.name}
          className="absolute w-full h-full object-contain rounded-xl z-10 drop-shadow-xl bg-black/10"
          style={{ left: 0, top: 0 }}
          draggable={false}
        />
        {/* Overlay Assets (stacked, with slight position offsets for demo) */}
        {assets.map((asset, i) => (
          <img
            key={asset.token_id}
            src={asset.image}
            alt={asset.name}
            className="absolute w-full h-full object-contain z-20 pointer-events-none select-none"
            style={{ left: 0, top: 0, opacity: 0.92 - i * 0.08, mixBlendMode: "lighten" }}
            draggable={false}
          />
        ))}
      </div>
      <div className="mt-2 text-base">
        <span className="font-bold text-parchment-white">{baseNft.name}</span>
        {assets.length > 0 && (
          <span className="ml-2 text-cream-bg/80 text-sm">
            + {assets.map(a => a.name).join(", ")}
          </span>
        )}
      </div>
    </div>
  );
};

export default function ComposeNFTPage() {
  const [selectedBaseNftId, setSelectedBaseNftId] = useState<string | null>(null);
  const [selectedAssetIds, setSelectedAssetIds] = useState<string[]>([]);
  const [composing, setComposing] = useState<boolean>(false);
  const [composeSuccess, setComposeSuccess] = useState<boolean>(false);

  const userBaseNfts = useAppSelector((state) => state.user.userBaseNfts);
  const userAssetNfts = useAppSelector((state) => state.user.userAssetNfts);
  const router = useRouter();

  // Find selected base nft
  const selectedBaseNft: Nft | null = useMemo(
    () => userBaseNfts.find(nft => nft.token_id === selectedBaseNftId) || null,
    [selectedBaseNftId]
  );

  // Assets available to the selected base NFT
  const relatedAssets: Nft[] = useMemo(() => {
    if (!selectedBaseNft) return [];
    return userAssetNfts.filter(asset => asset.token_id === selectedBaseNft.token_id);
  }, [selectedBaseNft]);

  // Which assets are currently selected
  const selectedAssets: Nft[] = useMemo(
    () => relatedAssets.filter(asset => selectedAssetIds.includes(asset.token_id)),
    [relatedAssets, selectedAssetIds]
  );

  // Handle NFT selection
  const handleSelectBaseNft = (id: string) => {
    setSelectedBaseNftId(id);
    setSelectedAssetIds([]); // Reset assets when switching base nft
    setComposeSuccess(false);
  };

  // Select/unselect asset
  const handleToggleAsset = (id: string) => {
    setSelectedAssetIds(prev => {
      if (prev.includes(id)) return prev.filter(assetId => assetId !== id);
      return [...prev, id];
    });
    setComposeSuccess(false);
  };

  // Compose NFT (mock demo)
  const handleCompose = () => {
    setComposing(true);
    setComposeSuccess(false);
    // Mock compose delay
    setTimeout(() => {
      setComposing(false);
      setComposeSuccess(true);
    }, 1200);
  };

  return (

    <div className="pt-28 md:px-10 px-5 flex flex-col flex-wrap gap-8 text-parchment-white font-raleway">
      <div className="flex items-center justify-between mb-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-pink-bg hover:bg-pink-bg/10 px-3 py-1 rounded-full font-semibold transition text-sm flex items-center cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft className="" />
          Go back
        </button>
        <h1 className="flex-1 text-2xl sm:text-3xl font-extrabold text-pink-bg text-center">
          Compose Your NFT Character
        </h1>
      </div>
      <p className="text-cream-bg/80 text-center max-w-xl mx-auto mb-2">
        Select a base NFT, decorate it by adding assets, preview your composed character in real time, and mint it as a unique Composite NFT!
      </p>
      {/* 1. Select base NFT */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-parchment-white">1. Choose your Base NFT:</h2>
        <div className="flex gap-4 overflow-x-auto py-2 mb-2 no-scrollbar">
          {userBaseNfts.map((nft, _i) => (
            <NFTCard
              key={_i}
              nft={nft}
              selected={selectedBaseNftId === nft.token_id}
              onClick={() => handleSelectBaseNft(nft.token_id)}
            />
          ))}
        </div>
        {selectedBaseNftId === null && (
          <div className="text-cream-bg/70 font-normal text-sm mt-1">You must select a base NFT to proceed.</div>
        )}
      </section>

      {/* 2. Select assets */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-parchment-white">2. Add Assets to Your NFT:</h2>
        <div className="min-h-[40px]">
          {!selectedBaseNft && (
            <div className="text-cream-bg/60 text-sm">
              Pick a base NFT first! Its compatible assets will appear here.
            </div>
          )}
          {selectedBaseNft && relatedAssets.length === 0 && (
            <div className="text-cream-bg/60 text-sm">
              No special assets are available for this NFT at the moment.
            </div>
          )}
          {selectedBaseNft && relatedAssets.length > 0 && (
            <div className="flex gap-4 overflow-x-auto py-2 no-scrollbar">
              {userAssetNfts.map((asset, _i) => (
                <AssetCard
                  key={_i}
                  asset={asset}
                  selected={selectedAssetIds.includes(asset.token_id)}
                  onClick={() => handleToggleAsset(asset.token_id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. Overview / Preview */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-parchment-white">3. Preview your Composite NFT:</h2>
        <div className="w-full flex flex-col items-center justify-center">
          <ComposedNFTDisplay baseNft={selectedBaseNft} assets={selectedAssets} />
        </div>
      </section>

      {/* 4. Compose Button & Result */}
      <div className="flex w-full justify-center mt-4">
        <button
          className={`px-8 py-3 rounded-full font-bold text-lg transition border-2 focus:outline-none ${
            selectedBaseNft
              ? "bg-pink-bg border-pink-bg text-cream-bg hover:bg-btn-bg hover:text-white shadow"
              : "bg-cream-bg/30 border-cream-bg/50 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!selectedBaseNft || composing}
          onClick={handleCompose}
        >
          {composing ? "Composing..." : "Compose NFT"}
        </button>
      </div>
      {composeSuccess && (
        <div className="flex w-full justify-center mt-0 sm:mt-2">
          <div className="text-green-400 font-semibold py-2 px-4 rounded bg-midnight-ink border border-green-500 text-center animate-pulse">
            🎉 Successfully composed your NFT! It is now ready to be minted.
          </div>
        </div>
      )}
    </div>
  );
}

