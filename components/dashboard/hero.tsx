import Link from "next/link";
import { inter, raleway } from "@/app/layout";

export default function DashboardHero() {
  const statsItems = [
    {
      label: "Total Earnings",
      value: "$6,420",
      valueClassName: "font-monospace",
      subLabel: "From NFT Sales",
    },
    {
      label: "NFTs Bought",
      value: "18",
      valueClassName: "",
      subLabel: "Assets acquired",
    },
    {
      label: "NFTs Sold",
      value: "12",
      valueClassName: "",
      subLabel: "Transactions completed",
    },
    {
      label: "Collection Value",
      value: "$8,710",
      valueClassName: "",
      subLabel: "Current Portfolio",
    },
  ]

  return (
    <section
      className={`flex md:flex-nowrap flex-wrap gap-8 justify-between mb-8 text-white w-full ${raleway.className}`}
    >
      {/* Hero Text */}
      <div className="p-12 rounded-[16px] md:w-[60%] w-full h-fit bg-[url(/assets/images/gradient-bg.png)] bg-no-repeat bg-cover bg-bottom-right border">
        <h1 className="text-3xl md:text-6xl leading-[120%] font-bold mb-3">
          Discover, Create and Sell Your Own NFT.
        </h1>
        <p className="mb-6 text-base md:text-lg">
          Manage your assets, monitor activities, and explore the latest features of the Forge Realm marketplace.
          Seamlessly connect your wallet and start trading digital assets with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/dashboard/marketplace"
            className="px-6 py-3 bg-pink-bg text-white text-base font-semibold rounded-full shadow-md hover:bg-btn-bg transition"
          >
            Go to Marketplace
          </Link>
          <Link
            href="/dashboard/profile"
            className="px-6 py-3 bg-white hover:bg-cream-bg transition-all text-pink-bg border border-pink-bg text-base font-semibold rounded-full shadow-md"
          >
            View Profile
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap md:justify-start justify-center gap-6 md:w-[40%] w-full h-full text-black-bg">
        {/* Total Earnings from NFT Sales */}
        {statsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white backdrop-blur-sm rounded-[16px] border border-gray-100 p-6 md:w-[45%] w-[250px]"
          >
            <p className="text-lg font-semibold mb-2">{item.label}</p>
            <p
              className={`
                ${inter.className}
                ${item.valueClassName}
                text-pink-bg text-5xl font-bold
              `}
            >
              {item.value}
            </p>
            <p className="mt-2 text-sm">{item.subLabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
