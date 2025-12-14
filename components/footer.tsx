"use client";

import Link from "next/link";
import React, { useState } from "react";


const socialLinks = [
  {
    alt: "Twitter logo",
    src: "https://img.icons8.com/color/F2EDE3/48/twitterx--v1.png",
    link: "https://x.com/_forgerealm",
  },
  {
    alt: "GitHub logo",
    src: "https://img.icons8.com/ios-filled/F2EDE3/50/github.png",
    link: "https://github.com/forge-realm",
  },
];

const exploreLinks = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Rankings", href: "/rankings" },
  { name: "Connect a wallet", href: "/auth" },
];

// Placeholder logo -- replace as needed or import your logo
function AppLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} style={{ fontWeight: "bold", fontSize: "1.25em" }}>
      Forge Realm
    </span>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add actual subscribe logic here (API call, show toast, etc.)
    // alert("Subscribed: " + email);
    setEmail("");
  };

  return (
    <footer
      className={`font-raleway flex flex-col items-center gap-[30px] px-[5%] py-10 w-full mt-20 bg-midnight-ink text-cream-bg`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-[1440px]">
        <div>
          <div className="mb-4">
            <Link href="/" className={`font-raleway mb-4 block font-bold uppercase text-2xl`}>
              <AppLogo className="text-xl" />
            </Link>
            <p>
              Forge Realm is your portal to collaborative NFT creation, powered by community and creativity.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-[15px]">
              <p>Connect with me on</p>
              <div className="flex items-start gap-2.5">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-8 h-8"
                      src={social.src}
                      alt={social.alt}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold md:text-xl text-lg mb-4">Explore</h3>
          <nav className="flex flex-col items-start gap-2">
            {exploreLinks.map((link, idx) => (
              <Link key={idx} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="mb-4 md:text-xl text-lg font-semibold">
            Join Our Weekly Digest
          </h3>
          <div className="w-full">
            <p className="max-w-[330px] mb-5">
              Get exclusive promotions &amp; updates straight to your inbox.
            </p>
            <form
              className="flex w-full max-w-[420px] h-auto sm:h-[60px] items-stretch sm:items-center gap-3 pr-2 rounded-[8px]"
              onSubmit={handleSubscribe}
            >
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 h-[50px] w-full bg-[#19191a] text-cream-bg rounded-lg px-4 focus:outline-none border-none placeholder:text-[#a9a9a9]"
                placeholder="Enter your email here"
                type="email"
                autoComplete="email"
                required
              />
              <button className="h-[50px] bg-pink-bg text-white px-6 rounded-lg font-semibold hover:bg-btn-bg transition" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*
      <div className="flex flex-col items-start gap-5 w-full max-w-[1050px] mt-8">
        <div className="w-full h-[1px] bg-[#858584]" />
        <p className="font-caption-work-sans text-cream-bg text-sm tracking-wide leading-snug">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
      */}
    </footer>
  );
}
