"use client"

import { Nft } from "@/data/nft";
import { useEffect, useState } from "react";

// Overview composite: just overlay images for visual, simplified
const ComposedDisplay = ({
  baseNft,
  assets,
  mintable = false,
}: {
  baseNft: Nft | null;
  assets: Nft[];
  mintable: boolean
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

  const [groupedAssets, setGroupedAssets] = useState<{
    armor: Nft | null,
    shield: Nft | null,
    weapon: Nft | null,
  }>({
    armor: null,
    shield: null,
    weapon: null,
  });

  useEffect(() => {
    console.log(assets)
    assets.forEach(asset => {
      const category = asset?.attributes?.[0]?.value?.toLowerCase?.() || "";
      setGroupedAssets(prev => {
        const updated = { ...prev };
        if (category === "armor") updated.armor = asset;
        else if (category === "shield") updated.shield = asset;
        else if (category === "weapon") updated.weapon = asset;
        return updated;
      });
    });
    console.log(groupedAssets)
  }, [assets])


  return (
    <>
      {mintable ?
        <div className="w-full min-h-64 flex flex-col items-center justify-center relative">
          <div className="w-[220px] h-[220px] relative ml-2">
            <img
              src={baseNft.image}
              alt="Selected Avatar"
              className="w-full h-full rounded-full mb-2 relative z-30"
            />
            {/* Armor */}
            {groupedAssets.armor && <img
              src={groupedAssets.armor.image}
              alt="Selected Armor"
              className="absolute -top-[15%] left-[44%] -rotate-[5deg] -translate-x-[50%] w-[35%] h-[35%] z-10"
            />}
            {/* Shield */}
            {groupedAssets.shield && <img
              src={groupedAssets.shield.image}
              alt="Selected Shield"
              className="absolute bottom-[0%] left-[42%] -translate-x-[50%] w-[65%] h-[65%] z-30 "
            />}
            {/* Weapon */}
            {groupedAssets.weapon && <img
              src={groupedAssets.weapon?.image}
              alt="Selected Weapon"
              className="absolute bottom-[15%] -right-[25%] w-[60%] h-[60%] z-30"
            />}
          </div>
        </div>
        :
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
          </div>
          <div className="mt-2 text-base">
            <span className="font-bold text-parchment-white">{baseNft.name}</span>
            {assets.length > 0 && (
              <span className="ml-2 text-cream-bg text-sm">
                + {assets.map(a => a.name).join(", ")}
              </span>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default ComposedDisplay;