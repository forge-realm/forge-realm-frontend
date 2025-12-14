import Card from "../ui/card";
import Link from "next/link";
import { type Nft, nfts } from "@/data/nft";

const sampleNfts: Nft[] = nfts.slice(0, 12);

export default function DashboardMarket() {
  return (
    <section className={`w-full my-4 font-raleway text-parchment-white`}>
      {/* Market Overview Stats */}
      <div
        className={`market-overview__header w-full mb-16 flex gap-4 items-center justify-between`}
      >
        <h2 className="md:text-3xl text-2xl font-bold">Featured Marketplace</h2>
        <Link
          href="/dashboard/marketplace"
          className="inline-block px-4 py-2 rounded-full bg-pink-bg text-white font-semibold text-sm hover:bg-btn-bg transition"
          aria-label="View all NFTs in the marketplace"
        >
          View All
        </Link>
      </div>

      {/* Featured NFTs */}
      <div className="flex flex-wrap justify-center gap-6">
        {sampleNfts.map((nft, index) => (
          <Card key={nft.name + index} nft={nft} />
        ))}
      </div>
    </section>
  );
}
