"use client"

import { Nft } from "@/data/nft";


const BaseNftCard = ({
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
    className={`cursor-pointer rounded-lg shadow w-32 sm:w-36 p-2 border-2 transition ${selected ? "border-pink-bg" : "border-gray-500"
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

export default BaseNftCard;