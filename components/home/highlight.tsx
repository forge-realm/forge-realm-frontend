"use client"

import { inter, raleway } from "@/lib/fonts";
import Card from "../ui/card";
import { CardProp } from "@/interface/nft";
import { type Nft, nfts } from "@/data/nft";


export default function Highlight() {
  function priceToDollars(eth: number): number {
    // Assume a fixed ETH to USD rate for illustration. In real apps, this would come from an API.
    const ETH_TO_USD = 3500;
    return eth * ETH_TO_USD;
  }

  return (
    <section className={`highlight relative w-full min-h-[70vh] my-16 md:px-10 px-5 py-8 flex items-center ${raleway.className}`}>
      <div className="highlight__inner flex items-center justify-center gap-16 flex-wrap max-w-[1440px] mx-auto">
        <div className="highlight__inner_card">
          <Card nft={nfts[0]} />
        </div>

        <div className="highlight__inner_text max-w-[600px]">
          <div>
            <div className="highlight__inner_text_header">
              <h3 className="font-semibold text-5xl mb-2">Top NFT Collectors This Month</h3>
              <p className="md:text-lg text-[1rem]">That overpass less us massage everything in one place, its super helpful</p>
            </div>

            <div className="highlight__inner_text_overview mt-8 border-4 border-btn-bg md:p-8 p-4 flex md:items-center justify-between">
              <div>
                <p className="mb-2">Total Amt. Sold</p>
                <h3 className={`${inter.className} font-bold text-3xl items-end flex md:flex-row gap-x-1 flex-col`}>{Number(nfts[0].price) * 10} ETH {" "}

                <span className={`text-[1rem] md:mb-1 mb-0 font-normal`}>${priceToDollars(Number(nfts[0].price) * 10)}</span>
                </h3>
              </div>

              <div className="border border-white h-[60px]">
              </div>

              <div>
                <p className="mb-2">Total No. Sold</p>
                <h3 className={`${inter.className} font-bold text-3xl`}>#{Number(nfts[0].price) * 1000}</h3>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label={`Buy ${nfts[0].name} for ${nfts[0].price} ETH`}
            title={`Buy ${nfts[0].name} for ${nfts[0].price} ETH`}
            className="highlight__buy-btn w-fit bg-btn-bg text-cream-bg py-2 px-4 font-medium"
          >
            Buy now
          </button>

        </div>
      </div>
    </section>
  );
};
