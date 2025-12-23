"use client";

import Link from "next/link";
import {
  Palette,
  Layers,
  Shuffle,
  ArrowRight,
  ShieldCheck,
  Users,
  Rocket,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function LearnMore() {
  return (
    <>
      <Navbar />
      <div className="bg-soft-charcoal min-h-[85vh] text-parchment-white font-raleway px-[5%] md:py-8 py-24">
        {/* Hero Section */}
        <section className="flex items-center md:flex-row md:justify-between justify-center flex-col gap-10 min-h-[85vh] text-parchment-white"
        >
          <div className={`hero__header lg:max-w-[900px] md:w-[60%] w-full font-raleway`}>
            <div className="mb-6">
              <span className="inline-block text-xs tracking-wider font-bold uppercase text-pink-bg font-raleway">
                Where Digital Assets Evolve
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold font-display leading-tight sm:text-6xl lg:text-7xl text-cream-bg">
              <span className="text-pink-bg drop-shadow">Forge Realm</span>
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-coral-bg/90 font-body">
              A creation layer for dynamic NFTs. Instead of static collectibles, Forge Realm enables assets that grow,
              change, and evolve through composable traits — all on-chain.
            </p>
            <div className="hero__header_button flex border border-pink-bg w-fit rounded-md mt-8">
              <Link
                href="/coming-soon"
                className="bg-pink-bg hover:bg-btn-bg transition-all md:min-w-[170px] w-fit text-cream-bg p-4 text-center"
                aria-label="Get Started - Connect your wallet to begin on Forge Realm"
                title="Get Started with Forge Realm"
              >
                <span>Join the Waitlist</span>
              </Link>
            </div>
          </div>

          <div className="hero__image md:w-[35%] w-full">
            <Image
              src="/assets/images/learn-more.png"
              className="w-full"
              alt="Hero image"
              width={300}
              height={300}
              priority
            />
          </div>
        </section>

        {/* Problem and Solution Section */}
        <section className="max-w-[1440px] mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 font-raleway">
          <div className="py-20 sm:py-28 lg:py-36">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">
              The Problem
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Most NFTs are static. Once minted, they never change. Creators are only paid once. Games struggle to support
              meaningful on-chain progression.
            </p>
            <p className="text-2xl font-semibold text-pink-bg font-display">
              Digital assets deserve to be <span className="text-coral-bg font-bold">alive</span>, not frozen.
            </p>
          </div>

          <div className="py-20 sm:py-28 lg:py-36">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">
              The Solution
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Forge Realm introduces <span className="font-bold text-charcoal">forging</span> — a system where NFTs
              can be combined, upgraded, and transformed using traits. {" "}
              <span className="text-lg font-bold">
                Assets don't get replaced. <span className="text-pink-bg">They evolve.</span>
              </span>
            </p>

            <div className="">
              <p className="mb-4 text-lg text-coral-bg/90 font-body">Each evolution creates a new asset with:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-pink-bg shrink-0"></span>
                  <span className="text-charcoal font-body">Updated visuals or metadata</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-pink-bg shrink-0"></span>
                  <span className="text-charcoal font-body">On-chain lineage and history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-pink-bg shrink-0"></span>
                  <span className="text-charcoal font-body">Shared royalties for creators involved</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-[1440px] mx-auto py-20 px-4 md:px-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How It Works</h2>
            <p className="text-cream-bg text-center md:text-lg max-w-2xl mx-auto mb-14">
              We make it easy for creators, collectors, and communities to collaborate on unique, composable NFTs. Here’s how to participate in the magic of Forge Realm:
            </p>
            <div className="flex flex-col md:flex-row gap-10 justify-between">
              <div className="flex-1 bg-midnight-ink rounded-2xl p-8 shadow-xl border border-border-card hover:border-pink-bg transition-all">
                <div className="w-14 h-14 flex items-center justify-center bg-pink-bg/20 rounded-full mb-6 mx-auto">
                  <Palette className="text-3xl text-pink-bg" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">1. Base Assets</h3>
                <p className="text-cream-bg text-base text-center mb-1">
                  Every creation starts with a base NFT — a character, item, or identity.
                </p>
              </div>
              <div className="flex-1 bg-midnight-ink rounded-2xl p-8 shadow-xl border border-border-card hover:border-pink-bg transition-all">
                <div className="w-14 h-14 flex items-center justify-center bg-pink-bg/20 rounded-full mb-6 mx-auto">
                  <Layers className="text-3xl text-pink-bg" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">2. Traits</h3>
                <p className="text-cream-bg text-base text-center mb-1">
                  Traits are modular components created by artists and designers. They define appearance, rarity, abilities, or future potential.
                </p>
              </div>
              <div className="flex-1 bg-midnight-ink rounded-2xl p-8 shadow-xl border border-border-card hover:border-pink-bg transition-all">
                <div className="w-14 h-14 flex items-center justify-center bg-pink-bg/20 rounded-full mb-6 mx-auto">
                  <Shuffle className="text-3xl text-pink-bg" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">3. Forge &amp; Compose</h3>
                <p className="text-cream-bg text-base text-center mb-1">
                  Users combine base assets with traits to forge new NFTs. Each forge results in a unique evolution with its own metadata and provenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Gamers, Platform, and Creators */}
        <section className="max-w-[1440px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="py-10 md:py-20">
            <h2 className="mb-10 font-display text-3xl md:text-4xl font-bold text-charcoal">
              Built for Creators
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-coral-bg/90 font-body">
              Forge Realm empowers artists beyond one-time mints.
            </p>

            <div className="space-y-4">
              {[
                "Create traits once",
                "Earn royalties whenever your traits are used",
                "Watch your work evolve across countless assets",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-lg">
                  <ArrowRight className="h-5 w-5 text-pink-bg shrink-0" />
                  <span className="text-charcoal font-body">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg font-bold font-display text-coral-bg">
              Your creativity compounds over time.
            </p>
          </div>

          <div className="py-10 md:py-20">
            <h2 className="mb-10 font-display text-3xl md:text-4xl font-bold">
              Built for Games &amp; Platforms
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-coral-bg/90 font-body">
              Forge Realm is designed to integrate easily into games and marketplaces.
            </p>

            <div>
              <ul className="space-y-4">
                {[
                  "Dynamic assets that grow with gameplay",
                  "Trait-based progression systems",
                  "On-chain history for every evolution",
                  "Plug-and-play architecture for studios",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-pink-bg shrink-0"></span>
                    <span className="text-charcoal font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-lg font-bold font-display text-coral-bg">
              Digital items finally feel meaningful.
            </p>
          </div>
        </section>

        {/* Royalties Section and Why it Matters */}
        <section className="max-w-[1440px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-20">
          <div className="py-10 md:py-20">
            <h2 className="mb-10 text-3xl md:text-4xl font-bold">
              Shared Royalties by Design
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-coral-bg/90 font-body">
              Every forged NFT fairly rewards contributors.
            </p>

            <div>
              <ul className="space-y-4">
                {["Base asset creators", "Trait designers", "Platform participants"].map((contributor, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-pink-bg shrink-0"></span>
                    <span className="text-charcoal font-body">{contributor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-lg font-bold font-display text-coral-bg">
              Royalties are transparent, automated, and enforced on-chain.
            </p>
          </div>

          <div className="py-10 md:py-20">
            <h2 className="mb-8 text-3xl md:text-4xl font-bold">
              Why Forge Realm Matters
            </h2>

            <ul className="space-y-4">
              {[
                "Digital assets become stories, not snapshots",
                "Creators stay incentivized long-term",
                "Players gain ownership over progression",
                "Games unlock deeper economies",
              ].map((reason, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-pink-bg shrink-0"></span>
                  <span className="text-charcoal font-body">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-lg text-charcoal mb-2 font-body">Forge Realm is not a marketplace.</p>
              <p className="text-lg font-bold font-display text-pink-bg">
                It's a <span className="text-coral-bg font-extrabold">foundation</span> for evolving digital identity.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="max-w-[1440px] mx-auto grid md:grid-cols-2 grid-cols-1 py-10 md:py-20">
          <div>
            <h2 className="mb-8 text-3xl md:text-4xl font-bold">
              Our Vision
            </h2>

            <p className="mb-6 max-w-2xl text-lg text-coral-bg/90 font-body">
              We believe the future of digital ownership is <span className="font-extrabold text-pink-bg">dynamic</span>.
            </p>

            <ul className="space-y-4">
              {["Assets should grow with you.", "Creativity should compound.", "Ownership should be transparent."].map(
                (vision, idx) => (
                  <li key={idx} className="text-lg text-charcoal font-body">
                    {vision}
                  </li>
                ),
              )}
            </ul>

            <p className="mt-8 text-lg font-bold font-display text-coral-bg">
              Forge Realm exists to make that future real.
            </p>
          </div>

          <div className="mx-auto max-w-[1440px] flex items-center bg-pink-bg/10 p-10">
            <div className="flex items-start justify-between gap-8">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-pink-bg font-display">
                  Ready to start creating?
                </h3>
                <p className="text-cream-bg md:text-lg">
                  Get started by connecting your wallet—forge a new NFT or create your own in just seconds.
                </p>
              </div>
              <Link
                href="/auth"
                className="p-3 bg-pink-bg hover:bg-btn-bg transition-all rounded-sm min-w-[150px] font-bold flex"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
