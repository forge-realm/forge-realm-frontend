import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { raleway } from "@/lib/fonts";

export default function Hero(): JSX.Element {
  return (
    <section className="flex items-center md:flex-row md:justify-between justify-center flex-col gap-10 min-h-[80vh] bg-parchment-white dark:bg-black-bg max-w-[1440px] md:mx-auto mx-5 md:px-10 px-5 md:py-8 py-24">
      <div className="hero__header md:w-[60%] w-full">
        <div className={`hero__header_text ${raleway.className}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black-bg leading-tight">
            Become The Next{" "}
            <span className="text-pink-bg relative inline-block" style={{
              WebkitTextStroke: "2px currentColor",
              WebkitTextFillColor: "transparent",
            }}>
              Millionaire
            </span>
          </h1>
          <p className="text-black-bg text-base md:text-lg max-w-xl leading-relaxed">
            By selling & Investing in NFT assets right now. The most trusted side for Non-Fungible Tokens & many more.
            Search NFTs in different topics & categories.
          </p>
        </div>

        <div className="hero__header_button flex border border-pink-bg w-fit rounded-[18px] mt-8 md:pr-4 pr-2">
          {/* <Link
            href="/auth"
            className="bg-btn-bg md:min-w-[170px] w-fit text-cream-bg rounded-l-[12px] rounded-r-[28px] p-4 text-center"
            aria-label="Get Started - Connect your wallet to begin on Forge Realm"
            title="Get Started with Forge Realm"
            prefetch={false}
          >
            <span>Get Started</span>
          </Link> */}
          <Link
            href="/coming-soon"
            className="bg-btn-bg md:min-w-[170px] w-fit text-cream-bg rounded-l-[12px] rounded-r-[28px] p-4 text-center"
            aria-label="Get Started - Connect your wallet to begin on Forge Realm"
            title="Get Started with Forge Realm"
            prefetch={false}
          >
            <span>Get Started</span>
          </Link>
          <button type="button" className="w-fit text-black-bg p-4">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero__image md:w-[35%] w-full">
        <Image src="/assets/images/hero.svg" className="w-full" alt="Hero image" width={300} height={300} />
      </div>
    </section>
  );
};
