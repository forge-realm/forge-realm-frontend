"use client"

import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, Wallet } from "lucide-react"
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useState } from "react";
import { raleway } from "@/lib/fonts";
import Image from "next/image";
import Logo from "./logo";

const navigationItems = [
  { label: "Marketplace", url: "/coming-soon" },
  { label: "Rankings", url: "/coming-soon" },
  { label: "Dashboard", url: "/coming-soon" }
];

export default function Navbar(): JSX.Element {
  const { universalAccount } = usePushWalletContext()
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between bg-app-background w-full max-w-[1440px] mx-auto md:mt-20 mt-5 md:px-0 px-5">
      {/* Logo */}
      <div className="logo bg-parchment-white w-fit h-[70px] px-4 dark:bg-black-bg rounded-t-[8px] flex items-center justify-center">
        <Logo />
      </div>


      {/* Navigation Links */}
      <div className={`nav-links col-start-2 w-fit h-[70px] px-4 bg-parchment-white dark:bg-black-bg rounded-t-[8px] md:flex hidden items-center justify-center ${raleway.className} font-medium`}>
        <ul className="flex items-center gap-5">
          {navigationItems.map((item) => (
            <li key={item.label}><Link className={`px-4 min-w-[150px] text-center md:text-lg text-[1rem] ${pathname == item.url && 'text-pink-bg'}`} href={item.url}>{item.label}</Link></li>
          ))}
        </ul>
      </div>


      {/* Connect Wallet Button */}
      <div className="auth-button w-fit h-[70px] px-4 bg-parchment-white dark:bg-black-bg rounded-t-[8px] md:flex hidden items-center md:text-lg text-[1rem] font-bold">
        {/* <Link
          href="/auth"
          aria-label="Connect your wallet to get started"
          role="button"
          tabIndex={0}
          title="Connect your wallet to get started"
          className="px-4 py-2"
        >
          Get Started
        </Link> */}

        <Link
          href="/coming-soon"
          aria-label="Connect your wallet to get started"
          role="button"
          tabIndex={0}
          title="Connect your wallet to get started"
          className="px-4 py-2"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Navbar */}
      <nav aria-label="Mobile Navigation" className="mobile-nav px-5 w-fit h-[70px] bg-parchment-white dark:bg-black-bg rounded-t-[8px] flex items-center relative md:hidden">
        <button
          type="button"
          aria-label={showMenu ? "Close mobile menu" : "Open mobile menu"}
          aria-controls="mobile-menu-drawer"
          aria-expanded={showMenu}
          className="outline-none"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <MenuIcon />
        </button>

        {/* Overlay for when menu is open */}
        {showMenu && (
          <div
            className="fixed inset-0 z-40 bg-black-bg/80 bg-opacity-30"
            aria-label="Overlay to close mobile menu"
            role="presentation"
            tabIndex={-1}
            onClick={() => setShowMenu(false)}
          />
        )}

        <aside
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className={`fixed top-0 right-0 h-full max-w-[350px] w-[85vw] z-50 transition-transform duration-300
          bg-parchment-white dark:bg-black-bg shadow-xl ${raleway.className} font-medium
          ${showMenu ? "translate-x-0" : "translate-x-full"}
          flex flex-col`}
          style={{ willChange: "transform" }}
        >
          <header className="h-[70px] flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
            <span className="font-bold text-2xl uppercase">
              <span className="text-pink-bg">forge</span> realm
            </span>
            <button
              aria-label="Close mobile menu"
              onClick={() => setShowMenu(false)}
              className="ml-2"
            >
              <MenuIcon />
            </button>
          </header>
          <ul className="flex flex-col items-center gap-6 mt-12" role="menu">
            {navigationItems.map((item) => (
              <li key={item.label} className="w-full" role="none">
                <Link
                  href={item.url}
                  role="menuitem"
                  tabIndex={showMenu ? 0 : -1}
                  aria-current={pathname == item.url ? "page" : undefined}
                  className={`block w-full px-8 py-4 text-lg text-center rounded 
                    transition-colors duration-150 
                    ${pathname == item.url ? "text-pink-bg bg-gray-100 dark:bg-gray-900" : "hover:bg-gray-100 dark:hover:bg-gray-900"}`}
                  onClick={() => setShowMenu(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="w-full" role="none">
              <Link
                href="/auth"
                role="menuitem"
                tabIndex={showMenu ? 0 : -1}
                aria-current={pathname == '/auth' ? "page" : undefined}
                className={`block w-full px-8 py-4 text-lg text-center rounded font-bold transition-colors duration-150
                  ${pathname == '/auth' ? "text-pink-bg bg-gray-100 dark:bg-gray-900" : "hover:bg-gray-100 dark:hover:bg-gray-900"}`}
                onClick={() => setShowMenu(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </aside>
      </nav>
    </nav>
  );
};
