// You do *not* have to use "use client" in every component or page you create in Next.js. 
// You should only add `"use client"` to the *top* of a component or file if you need to use features that require client-side rendering—such as hooks (`useState`, `useEffect`), browser APIs, or event handlers. 
// By default, components and pages in Next.js 13+ (with the App Router) are rendered on the server unless you specify "use client" at the top of the file.
// So, use "use client" only when needed for interaction or client-only features.

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";
import { raleway } from "@/app/layout";

const socialLinks = [
  { alt: "Twitter logo", src: "https://img.icons8.com/color/F2EDE3/48/twitterx--v1.png" },
  { alt: "GitHub logo", src: "https://img.icons8.com/ios-filled/F2EDE3/50/github.png" },
];

const exploreLinks = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Rankings", href: "/rankings" },
  { name: "Connect a wallet", href: "/auth" }
];

export default function Footer() {
  return (
    <footer className={`${raleway.className} flex flex-col items-center gap-[30px] px-5 sm:px-8 md:px-12 lg:px-20 xl:px-[195px] py-10 w-full bg-black-bg text-cream-bg dark:bg-cream-bg dark:text-black-bg`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-[1050px]">
        <div>
          <div className="mb-4">
            <Link href="/" className={`${raleway.className} mb-4 block font-bold uppercase text-2xl`}>
              <Image className="md:hidden block" width={35} height={35} src="/assets/icons/logo.png" alt="Forge realm logo" />
              <span className="md:block hidden">
                <span className="text-pink-bg">
                  forge</span> realm
              </span>
            </Link>
            <p>
              Forge Realm is your portal to collaborative NFT creation, powered by community and creativity.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-[15px]">
              <p>
                Connect with me on
              </p>

              <div className="flex items-start gap-2.5">
                {socialLinks.map((social, index) => (
                  <img
                    key={index}
                    className="w-8 h-8"
                    alt={social.alt}
                    src={social.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold md:text-xl text-lg mb-4">
            Explore
          </h3>

          <nav className="flex flex-col items-start gap-2">
            {exploreLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
              >
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

            <div className="flex w-full max-w-[420px] h-auto sm:h-[60px] items-stretch sm:items-center gap-3 pr-2 rounded-[8px]">
              <Input
                className="flex-1 h-[50px] w-full"
                placeholder="Enter your email here"
              />

              <Button className="h-[50px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-start gap-5 w-full max-w-[1050px]">
        <Separator className="w-full bg-[#858584]" />

        <p className="font-caption-work-sans font-(--caption-work-sans-font-weight) text-cream-bg text-(length:--caption-work-sans-font-size) tracking-(--caption-work-sans-letter-spacing) leading-(--caption-work-sans-line-height) [font-style:var(--caption-work-sans-font-style)]">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div> */}
    </footer>
  );
};
