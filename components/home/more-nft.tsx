import React from "react";
import { nfts } from "@/data/nft";
import Card from "../ui/card";
import { raleway } from "@/lib/fonts";

const sampleNftCards = nfts.slice(0, 4);

export default function MoreNfts() {
  return (
    <section
      className={`md:px-10 px-5 py-12 min-h-[70vh] text-parchment-white ${raleway.className}`}
    >
      <div className="more-nft__header text-center mb-8">
        <h2 className="md:text-5xl text-4xl font-bold">Discover</h2>
        <p className="md:text-lg text-[1rem] text-cream-bg mt-2">
          Explore a curated selection of unique NFTs from innovative artists and collections.
        </p>
      </div>

      <div className="more-nft__nfts my-12 flex flex-wrap gap-8 justify-center">
        {sampleNftCards.map((nft, index) => (
          <Card key={nft.name + index} nft={nft} />
        ))}
      </div>
    </section>
  );
}
