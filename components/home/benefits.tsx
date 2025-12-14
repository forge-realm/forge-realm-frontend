import React from "react";
import { raleway } from "@/lib/fonts";
import {
  Users2,
  ShieldCheck,
  BadgeDollarSign,
  Lock,
  MessageCircle,
  Wallet,
} from "lucide-react";

interface Benefit {
  id: number;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Collaborative Creation",
    description:
      "Multiple creators can layer traits and accessories onto a single NFT, enabling unprecedented collaboration.",
    Icon: Users2,
  },
  {
    id: 2,
    title: "True Ownership",
    description:
      "Own your NFTs with full blockchain verification. Your assets are yours, forever.",
    Icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Low Fees",
    description:
      "Enjoy competitive marketplace fees and gas-efficient transactions on our platform.",
    Icon: BadgeDollarSign,
  },
  {
    id: 4,
    title: "Secure Platform",
    description:
      "Built with security-first principles. Your assets and data are protected with industry-leading security.",
    Icon: Lock,
  },
  {
    id: 5,
    title: "Active Community",
    description:
      "Join thousands of creators and collectors in our vibrant, supportive community.",
    Icon: MessageCircle,
  },
  {
    id: 6,
    title: "Easy Integration",
    description:
      "Seamlessly connect your wallet and start trading. Support for multiple wallet providers.",
    Icon: Wallet,
  },
];

export default function Benefits() {
  return (
    <section
      className={`benefits md:px-10 px-5 py-12 min-h-[70vh] text-parchment-white ${raleway.className}`}
    >
      <div className="benefits__header text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Forge Realm?</h2>
        <p className="md:text-lg text-base text-cream-bg max-w-2xl mx-auto">
          Experience the future of NFT creation and trading with our innovative platform
        </p>
      </div>

      <div className="benefits__container flex flex-wrap items-start justify-center gap-16 max-w-7xl mx-auto">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="benefit-card bg-midnight-ink rounded-2xl p-6 md:p-8 border border-border-card hover:border-pink-bg transition-all duration-300 hover:scale-105 shadow-lg w-[350px] min-h-[310px]"
          >
            <div className="w-16 h-16 rounded-xl bg-pink-bg/20 flex items-center justify-center mb-6">
              <benefit.Icon className="text-3xl text-pink-bg" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-cream-bg text-base leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
