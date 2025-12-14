import React from "react";
import type { Nft } from "@/data/nft";

type CardProps = {
  nft: Nft;
};

const Card: React.FC<CardProps> = ({ nft }) => {
  const statusBadge = nft.status === "On Sale"
    ? (
      <span className="absolute top-3 left-3 px-3 py-1 text-xs bg-pink-bg text-parchment-white rounded-full">
        On Sale
      </span>
    ) : nft.status === "Owned"
    ? (
      <span className="absolute top-3 left-3 px-3 py-1 text-xs bg-gray-300 rounded-full">
        Owned
      </span>
    ) : null;

  const buttonDisabled = nft.status !== "On Sale";
  const buttonClasses = [
    "mt-auto py-3 px-4 rounded-lg text-sm font-semibold transition",
    nft.status === "On Sale"
      ? "bg-pink-bg text-white hover:bg-btn-bg cursor-pointer"
      : "bg-cream-bg text-soft-charcoal cursor-not-allowed"
  ].join(" ");

  return (
    <div className="bg-midnight-ink w-[350px] h-[450px] rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-xl">
        <img
          src={nft.image}
          alt={nft.name}
          className="object-contain w-full h-full rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        />
        {statusBadge}
      </div>
      <h2 className="font-semibold text-lg mb-1">{nft.name}</h2>
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="text-cream-bg">
          By {nft.creator.name}
        </span>
        <span className="font-bold text-pink-bg text-lg">
          {nft.price} ETH
        </span>
      </div>
      <button
        disabled={buttonDisabled}
        className={buttonClasses}
      >
        {nft.status === "On Sale" ? "Buy Now" : "Not Available"}
      </button>
    </div>
  );
};

export default Card;