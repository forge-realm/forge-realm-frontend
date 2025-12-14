import { nfts, type Nft } from "@/data/nft";
import { raleway } from "@/lib/fonts";
// convert this into an appropriate Next.js file
// If you have a Card component for NFT display, import it here
import Card from "../ui/card";

const interClass = "font-inter";
const ralewayClass = raleway.className;

function priceToDollars(eth: number): number {
  // Static ETH->USD rate for illustration
  const ETH_TO_USD = 3500;
  return eth * ETH_TO_USD;
}

type Collector = {
  rank: number;
  name: string;
  volume: number;
  nfts: number;
};

const collectors: Collector[] = [
  { rank: 1, name: "Jane Doe", volume: 103.5, nfts: 28 },
  { rank: 2, name: "CryptoKat", volume: 95.2, nfts: 24 },
  { rank: 3, name: "IslandMaker", volume: 82.9, nfts: 21 },
  { rank: 4, name: "RoadRunner", volume: 66.0, nfts: 17 },
];

const nft: Nft = nfts[0];

export default function Highlight() {
  return (
    <section
      className={`highlight relative w-full min-h-[90vh] text-parchment-white py-12 ${ralewayClass}`}
    >
      <div className="highlight__header mb-16 w-full text-center max-w-[800px] mx-auto">
        <h3 className="font-semibold md:text-5xl text-4xl mb-2">
          Top NFT Collectors This Month
        </h3>
        <p className="md:text-lg text-[1rem] text-cream-bg">
          Discover the biggest movers, record sellers, and active participants. From record-breaking auctions to
          rising stars, our NFT leaderboard tracks it all.
        </p>
      </div>

      <div className="highlight__inner flex items-start justify-center w-full md:gap-40 flex-wrap">
        {/* Highlighted NFT Card */}
        <div className="highlight__inner_card flex flex-col items-center">
          <Card nft={nft} />
        </div>

        {/* Rich Text + Stats + Leaderboards + FAQ */}
        <div className="highlight__inner_text max-w-[630px] w-full flex flex-col gap-8">
          {/* Section Header and intro */}
          <div>
            <div className="highlight__inner_text_overview mt-8 border-4 border-pink-bg md:p-8 p-4 flex md:items-center justify-between flex-col md:flex-row gap-6 md:gap-0">
              <div>
                <p className="mb-2 text-pink-bg">Total Amt. Sold</p>
                <h3 className={`${interClass} font-bold text-3xl items-end flex md:flex-row gap-x-2 flex-col`}>
                  {Number(nft?.price) * 10} ETH
                  <span className="text-base md:mb-1 mb-0 font-normal">
                    ${priceToDollars(Number(nft?.price) * 10).toLocaleString()}
                  </span>
                </h3>
              </div>

              <div className="border-b md:border-b-0 md:border-l border-pink-bg h-px md:h-[60px] md:w-px w-full md:mx-8"></div>

              <div>
                <p className="mb-2 text-pink-bg">Total No. Sold</p>
                <h3 className={`${interClass} font-bold text-3xl`}>
                  #{Number(nft?.price) * 1000}
                </h3>
              </div>
            </div>
          </div>

          {/* Top Collectors Table */}
          <div className="bg-soft-charcoal/70 rounded-2xl p-6 shadow-lg">
            <h4 className="font-semibold text-2xl mb-4">Leaderboard</h4>
            <table className="w-full text-base">
              <thead>
                <tr>
                  <th className="text-left pb-2 text-pink-bg">Rank</th>
                  <th className="text-left pb-2">Collector</th>
                  <th className="text-left pb-2">Volume (ETH)</th>
                  <th className="text-left pb-2">NFTs Bought</th>
                </tr>
              </thead>
              <tbody>
                {collectors.map((collector) => (
                  <tr
                    key={collector.rank}
                    className={
                      collector.rank === 1 ? "font-bold text-pink-bg/80" : ""
                    }
                  >
                    <td className="py-1">{collector.rank}</td>
                    <td className="py-1">{collector.name}</td>
                    <td className="py-1">{collector.volume}</td>
                    <td className="py-1">{collector.nfts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
