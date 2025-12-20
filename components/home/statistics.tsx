"use client";

import { useEffect, useRef, useState } from "react";
import { raleway } from "@/lib/fonts";
import { LineChart, Users, Layers, Folder } from "lucide-react";
import { useAppSelector } from "@/lib/hooks";

function formatNumber(num: number) {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  }
  return num.toString();
}

export default function Statistics() {
  const totalBalance = Number(useAppSelector((state) => state.overview.totalBalance));
  const nftsMinted = Number(useAppSelector((state) => state.overview.nftsMinted));
  const activeUsers = Number(useAppSelector((state) => state.overview.activeUsers));
  const totalCollections = Number(useAppSelector((state) => state.overview.totalCollections));

  const stats = [
    {
      label: "Total Volume",
      value: totalBalance,
      suffix: " ETH",
      icon: LineChart,
    },
    {
      label: "Active Users",
      value: activeUsers,
      suffix: "+",
      icon: Users,
    },
    {
      label: "NFTs Minted",
      value: nftsMinted,
      suffix: "+",
      icon: Layers,
    },
    {
      label: "Collections",
      value: totalCollections,
      suffix: "+",
      icon: Folder,
    },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const intervalRefs = useRef<(NodeJS.Timeout | number)[]>([]);

  useEffect(() => {
    // Clear any existing animations
    intervalRefs.current.forEach((id) => clearTimeout(id as NodeJS.Timeout));
    intervalRefs.current = [];

    // Reset animated values to 0 for new animation
    setAnimatedValues(stats.map(() => 0));

    stats.forEach((stat, index) => {
      setTimeout(() => {
        let current = 0;
        const increment = stat.value / (2000 / 16);

        function tick() {
          current += increment;
          setAnimatedValues((prev) => {
            const next = [...prev];
            if (current >= stat.value) {
              next[index] = stat.value;
            } else {
              next[index] = Math.floor(current);
            }
            return next;
          });

          if (current < stat.value) {
            intervalRefs.current[index] = setTimeout(tick, 16);
          }
        }
        tick();
      }, index * 200);
    });

    return () => {
      intervalRefs.current.forEach((id) => clearTimeout(id as NodeJS.Timeout));
    };
  }, [totalBalance, activeUsers, nftsMinted, totalCollections]); // ✅ Track actual values

  return (
    <section
      className={`statistics md:px-10 px-5 py-16 min-h-[60vh] text-parchment-white ${raleway.className}`}
    >
      <div className="statistics__header text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Statistics</h2>
        <p className="md:text-lg text-base text-cream-bg max-w-2xl mx-auto">
          Join thousands of creators and collectors building the future of composite NFTs
        </p>
      </div>
      <div className="statistics__container flex flex-wrap items-start justify-center gap-8">
        {stats.map((stat, index) => {
          const LucideIcon = stat.icon;
          return (
            <div
              key={index}
              className="stat-card bg-midnight-ink rounded-2xl p-6 md:p-8 text-center border border-border-card hover:border-pink-bg transition-all duration-300 hover:scale-105 shadow-lg w-[300px]"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-pink-bg/20 flex items-center justify-center">
                  <LucideIcon className="text-3xl text-pink-bg" size={32} />
                </div>
              </div>
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-pink-bg">
                  {formatNumber(animatedValues[index])}
                </span>
                <span className="text-2xl md:text-3xl font-bold ml-1 text-cream-bg">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-cream-bg text-base md:text-lg">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}