import React from "react";
import { nfts, type Nft } from "@/data/nft";
import { raleway } from "@/lib/fonts";
import Card from "../ui/card";
import Link from "next/link";

const collections = nfts.slice(0, 4) as Nft[];

export default function FeaturedCollections() {
  return (
    <section
      className={`featured-collections md:px-10 px-5 py-12 min-h-[80vh] my-8 text-parchment-white ${raleway.className}`}
    >
      <div className="featured-collections__header text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Collections</h2>
        <p className="md:text-lg text-base text-cream-bg max-w-2xl mx-auto">
          Explore the most popular and trending NFT collections on Forge Realm
        </p>
      </div>
      <div className="featured-collections__container flex flex-wrap items-center justify-center gap-8 mb-8">
        {collections.map((collection) => (
          <Card key={collection.token_id} nft={collection} />
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/coming-soon"
          className="inline-block px-8 py-3 bg-pink-bg hover:bg-btn-bg transition-all duration-300 rounded-lg font-semibold text-white"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
}
