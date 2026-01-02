"use client"

import { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { raleway } from "@/lib/fonts";
// #0247ae

const sidebarNav = [
  {
    section: "General",
    links: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Inbox", href: "/dashboard/inbox" },
      { name: "Wallet", href: "/dashboard/wallet" },
      { name: "Admin", href: "/dashboard/admin" },
    ]
  },
  {
    section: "Marketplace",
    links: [
      { name: "Marketplace", href: "/dashboard/marketplace" },
      { name: "Active Bid", href: "/dashboard/active-bid" },
      { name: "Collection", href: "/dashboard/collection" },
    ]
  },
  {
    section: "Profile",
    links: [
      { name: "My Profile", href: "/dashboard/profile" },
      { name: "Settings", href: "/dashboard/settings" },
      { name: "History", href: "/dashboard/history" },
    ]
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <div className={`${raleway.className}`}>
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex gap-y-10 flex-col bg-midnight-ink text-parchment-white w-76 min-h-screen p-6 space-y-6">
        <Logo />
        <nav className="flex flex-col gap-8">
          {sidebarNav.map((nav) => (
            <div key={nav.section}>
              <h3 className="text-sm font-bold mb-2">{nav.section}</h3>
              <ul className="flex flex-col">
                {nav.links.map((link) => (
                  <li key={link.name} className="">
                    <Link href={link.href} className={`block w-full p-2 ${pathname === link.href ? "text-parchment-white bg-pink-bg rounded-[8px] font-medium" : "text-cream-bg"}`}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Sidebar toggle button for mobile */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden bg-gray-50 rounded-md p-2 focus:outline-none"
        aria-label="Open sidebar"
        onClick={() => setIsOpen(true)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 z-50 md:hidden transition ${isOpen ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black-bg opacity-40" onClick={() => setIsOpen(false)} />
        <aside className="relative bg-gray-50 w-64 h-full p-6 space-y-6">
          <Logo />
          <nav className="flex flex-col gap-8">
            {sidebarNav.map((nav) => (
              <div key={nav.section}>
                <h3 className="text-sm font-bold">{nav.section}</h3>
                <ul className="flex flex-col">
                  {nav.links.map((link) => (
                    <li key={link.name} className="">
                      <Link href={link.href} className={`block w-full p-2 ${pathname === link.href ? "text-[#5f3bc0] font-bold" : ""}`}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
