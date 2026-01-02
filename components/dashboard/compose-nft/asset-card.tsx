"use client"

import { Nft } from "@/data/nft";

const AssetNftCard = ({
  asset,
  selected,
  onClick,
}: {
  asset: Nft;
  selected?: boolean;
  onClick?: () => void;
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

export default AssetNftCard;