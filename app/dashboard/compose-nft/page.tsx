"use client";

import { useState, useMemo } from "react";
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { Nft } from "@/data/nft";
import BaseNftCard from "@/components/dashboard/compose-nft/base-card"
import AssetNftCard from "@/components/dashboard/compose-nft/asset-card";
import ComposedDisplay from "@/components/dashboard/compose-nft/compose-display";


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
    console.log(id)
    setSelectedAssetIds(prev => {
      if (prev.includes(id)) return prev.filter(assetId => assetId !== id);
      return [...prev, id];
    });
    console.log(selectedAssetIds)
    setComposeSuccess(false);
  };

  // Compose NFT (mock demo)
  const handleCompose = async () => {
    setComposing(true);
    setComposeSuccess(false);
    // const nft = {
    //   avatar: selectedBaseNft,
    //   assets: selectedAssets,
    // }
    const imageUrls = selectedAssets.map(asset => asset.image).filter(url => url.trim() !== '' || url.trim() !== undefined);

    imageUrls.push(selectedBaseNft?.image as string)
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrls }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      if(data.success) {
        console.log(data);
      } else {
        alert("Error: " + data.error)
      }


      // Create a blob URL from the response
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      // setImageUrl(url);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'generated-image.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log(url);
    } catch (err) {
      // setError('Failed to generate image. Please try again.');
      console.error(err);
    } finally {
      setComposing(false);
      setComposeSuccess(true);
    }
  };

  const handleMintNft = async () => {
    console.log("Minting...")
  }

  return (
    <>
      {composing && (
        <div className="fixed h-screen inset-0 flex flex-col items-center justify-center bg-black/70 z-30 rounded-xl animate-pulse-fast">
          {/* Hammer and Anvil SVG */}
          <svg width="88" height="70" viewBox="0 0 88 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
            {/* Anvil */}
            <rect x="20" y="46" width="48" height="12" rx="4" fill="#B0B0B0" />
            <rect x="34" y="58" width="20" height="8" rx="2" fill="#797979" />
            {/* Hammer handle */}
            <rect x="56" y="16" width="9" height="34" rx="3" fill="#B38B58" transform="rotate(22 56 16)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="22 56 16" to="5 56 16" dur="0.4s" repeatCount="indefinite" direction="alternate" />
            </rect>
            {/* Hammer head */}
            <rect x="48" y="8" width="24" height="9" rx="3" fill="#222222" transform="rotate(22 56 16)">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="22 56 16" to="5 56 16" dur="0.4s" repeatCount="indefinite" direction="alternate" />
            </rect>
            {/* Sparks */}
            <circle cx="38" cy="58" r="2" fill="#FFD700">
              <animate attributeName="opacity" values="1;0;1" dur="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="46" cy="56" r="1.5" fill="#FFA500">
              <animate attributeName="opacity" values="0.6;0;0.6" dur="0.4s" repeatCount="indefinite" begin="0.15s" />
            </circle>
            <circle cx="50" cy="60" r="1.2" fill="#FFF59D">
              <animate attributeName="opacity" values="0.9;0;0.9" dur="0.4s" repeatCount="indefinite" begin="0.08s" />
            </circle>
          </svg>
          <div className="text-parchment-white font-bold text-lg tracking-wide drop-shadow">
            Forging your character...
          </div>
          <div className="text-cream-bg/70 text-sm mt-1">Please wait while we assemble your masterpiece!</div>
        </div>
      )}

      <div className="pt-28 md:px-10 px-5 text-parchment-white font-raleway">
        <button
          type="button"
          onClick={() => router.back()}
          className="text-pink-bg hover:bg-pink-bg/10 px-3 py-1 rounded-full font-semibold transition text-sm flex items-center cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft />
          Go back
        </button>
        <div className="my-10">
          <h1 className="flex-1 text-2xl sm:text-3xl font-extrabold text-pink-bg">
            Compose Your NFT Character
          </h1>
          <p className="text-cream-bg max-w-xl my-2">
            Select a base NFT, decorate it by adding assets, preview your composed character in real time, and mint it as a unique Composite NFT!
          </p>
        </div>

        <div className="flex items-start gap-20 h-fit flex-wrap">
          {/* 1. Select base NFT */}
          <div className="nfts">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-parchment-white">1. Choose your Base NFT:</h2>
              <div className="flex gap-4 overflow-x-auto py-2 mb-2 no-scrollbar">
                {userBaseNfts.map((nft, _i) => (
                  <BaseNftCard
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
            <section className="w-full">
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
                    {relatedAssets.map((asset, _i) => (
                      <AssetNftCard
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
          </div>

          {/* 3. Overview / Preview */}
          <section className="md:w-[45%]">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-parchment-white text-center">3. Preview your Composite NFT:</h2>
            <div className="w-full flex flex-col items-center justify-center relative">
              {/* Main Preview */}
              <ComposedDisplay mintable={composeSuccess} baseNft={selectedBaseNft} assets={selectedAssets} />
            </div>
            <div className="selectedAssets text-center p-4 mt-4">
              {selectedBaseNft && selectedAssets.length === 0 && (
                <div className="text-cream-bg text-sm">
                  No special assets are available for this NFT at the moment.
                </div>
              )}
              {selectedBaseNft && selectedAssets.length > 0 && (
                <div className="flex justify-center gap-4 overflow-x-auto py-2 no-scrollbar">
                  {selectedAssets.map((asset, _i) => (
                    <AssetNftCard
                      key={_i}
                      asset={asset}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* 4. Compose Button & Result */}
        <div className="flex w-full justify-center items-center h-fit mt-10 mb-4">
          {composeSuccess ?
            <button
              className={`px-8 py-2 rounded-full font-bold transition border-2 focus:outline-none ${selectedBaseNft
                ? "bg-pink-bg border-pink-bg text-cream-bg hover:bg-btn-bg hover:text-white shadow"
                : "bg-cream-bg/30 border-cream-bg/50 text-gray-500 cursor-not-allowed"
                }`}
              disabled={!selectedBaseNft || composing}
              onClick={handleMintNft}
            >
              Mint NFT
            </button> : <button
              className={`px-8 py-2 rounded-full font-bold transition border-2 focus:outline-none ${selectedAssets.length > 0
                ? "bg-pink-bg border-pink-bg text-cream-bg hover:bg-btn-bg hover:text-white shadow"
                : "bg-pink-bg/30 border-pink-bg/50 text-cream-bg/30 cursor-not-allowed"
                }`}
              disabled={!selectedBaseNft || selectedAssets.length < 1 || composing}
              onClick={handleCompose}
            >
              Compose NFT
            </button>
          }
        </div>
        {composeSuccess && (
          <div className="flex w-full justify-center mt-0 sm:mt-2">
            <div className="text-green-400 font-semibold py-2 px-4 rounded bg-midnight-ink border border-green-500 text-center animate-pulse">
              🎉 Successfully composed your NFT! It is now ready to be minted.
            </div>
          </div>
        )}
      </div>
    </>
  );
}

