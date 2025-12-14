"use client";

import Link from "next/link";
import Image from "next/image";
import { raleway } from "@/lib/fonts";

export default function Hero() {
  return (
    <section
      className="flex items-center md:flex-row md:justify-between justify-center flex-col gap-10 min-h-[85vh] text-parchment-white px-[5%] md:py-8 py-24"
    >
      <div className={`hero__header lg:max-w-[900px] md:w-[60%] w-full ${raleway.className}`}>
        <div className={`hero__header_text ${raleway.className}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span style={{ WebkitTextStroke: "1px" }}>Unlock Collaborative</span>
            <span
              className="text-pink-bg relative inline-block"
              style={{
                WebkitTextStroke: "2px currentColor",
                WebkitTextFillColor: "transparent"
              }}
            >
              NFT Creation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-cream-bg leading-relaxed">
            Forge the future of NFTs with a platform where creators and collectors unite. Layer, trade, and evolve unique digital assets together in a secure community driven by creativity.
          </p>
        </div>

        <div className="hero__header_button flex border border-pink-bg w-fit rounded-md mt-8 md:pr-4 pr-2">
          <Link
            href="/auth"
            className="bg-pink-bg hover:bg-btn-bg transition-all md:min-w-[170px] w-fit text-cream-bg rounded-l-sm rounded-r-[28px] p-4 text-center"
            aria-label="Get Started - Connect your wallet to begin on Forge Realm"
            title="Get Started with Forge Realm"
          >
            <span>Get Started</span>
          </Link>

          <Link
            href="/learn-more"
            className="w-fit text-cream-bg p-4"
            aria-label="Learn More - Learn more about Forge Realm and what they do"
            title="Learn More about Forge Realm"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </div>

      <div className="hero__image md:w-[35%] w-full">
        <Image
          src="/assets/images/hero.svg"
          className="w-full"
          alt="Hero image"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
}
