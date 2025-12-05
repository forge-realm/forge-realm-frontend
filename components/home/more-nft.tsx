"use client"

import { raleway } from "@/app/layout";
import Card from "../ui/card";
import { type Nft, nfts } from "@/data/nft";

const sampleNftCards: Nft[] = nfts.slice(0, 6);


export default function MoreNfts () {
  return (
    <section className={`max-w-[1440px] mx-auto md:px-10 px-5 py-12 bg-cream-bg dark:bg-black-bg min-h-[70vh] ${raleway.className}`}>
      <div className="more-nft__header">
        <h2 className="text-5xl font-bold">Discover</h2>
        <p className="md:text-lg text-[1rem] text-black-bg dark:text-cream-bg mt-2">
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
};
