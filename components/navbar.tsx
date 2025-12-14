"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { usePushWalletContext, PushUI } from "@pushchain/ui-kit";


// Replace with a hamburger icon of your choice or any SVG
function HamburgerIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-pink-bg"
    >
      <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

const navigationItems = [
  { label: "Marketplace", url: "/coming-soon" },
  { label: "Rankings", url: "/coming-soon" },
  { label: "Dashboard", url: "/dashboard" }
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const {connectionStatus} = usePushWalletContext()

  return (
    <nav className="flex items-center justify-between text-parchment-white px-[5%] py-4 font-raleway">
      {/* Logo and Desktop Navigation */}
      <div className="logo-nav w-fit flex gap-4 items-center justify-center">
        <Logo className="text-xl" />

        {/* Navigation Links (Desktop) */}
        <div className="nav-links col-start-2 w-fit px-4 md:flex hidden items-center justify-center font-medium">
          <ul className="flex items-center gap-2">
            {navigationItems.map((item) => (
              <li key={item.label}>
                {(item.label === "Dashboard")
                  ? (
                    connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED // naive wallet check
                        ? (
                            <Link
                              href={item.url}
                              className={`px-4 w-fit text-center hover:text-pink-bg ${
                                pathname === item.url ? "text-pink-bg" : ""
                              }`}
                            >
                              {item.label}
                            </Link>
                          )
                        : null
                    )
                  : (
                      <Link
                        href={item.url}
                        className={`px-4 w-fit text-center hover:text-pink-bg ${
                          pathname === item.url ? "text-pink-bg" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                }
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connect Wallet Button (Desktop, optionally update link) */}
      <div className="auth-button w-fit px-4 md:flex hidden items-center">
        <Link
          href="/auth"
          aria-label="Connect your wallet to get started"
          role="button"
          tabIndex={0}
          title="Connect your wallet to get started"
          className="px-4 py-2 bg-pink-bg hover:bg-btn-bg transition-all duration-300 rounded-md"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Navbar */}
      <nav
        aria-label="Mobile Navigation"
        className="mobile-nav px-5 w-fit flex items-center relative md:hidden"
      >
        {/* Hamburger Button */}
        <button
          type="button"
          aria-label={showMenu ? "Close mobile menu" : "Open mobile menu"}
          aria-controls="mobile-menu-drawer"
          aria-expanded={showMenu}
          className="outline-none"
          onClick={() => setShowMenu((m) => !m)}
        >
          <HamburgerIcon />
        </button>

        {/* Overlay when menu is open */}
        {showMenu && (
          <div
            className="fixed inset-0 z-40 bg-black-bg/80 bg-opacity-30"
            aria-label="Overlay to close mobile menu"
            role="presentation"
            tabIndex={-1}
            onClick={() => setShowMenu(false)}
          />
        )}

        {/* Drawer */}
        <aside
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className={`fixed top-0 right-0 h-full max-w-[350px] w-[85vw] z-50 transition-transform duration-300
             shadow-xl font-medium flex flex-col ${
               showMenu ? "translate-x-0" : "translate-x-full"
             }`}
          style={{ willChange: "transform" }}
        >
          <header className="flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 h-[70px]">
            <span className="font-bold text-2xl uppercase">
              <span className="text-pink-bg">forge</span> realm
            </span>
            <button
              aria-label="Close mobile menu"
              onClick={() => setShowMenu(false)}
              className="ml-2"
            >
              <HamburgerIcon size={24} />
            </button>
          </header>
          <ul className="flex flex-col items-center gap-6 mt-12" role="menu">
            {navigationItems.map((item) => (
              <li key={item.label} className="w-full" role="none">
                <Link
                  href={item.url}
                  role="menuitem"
                  tabIndex={showMenu ? 0 : -1}
                  aria-current={pathname === item.url ? "page" : undefined}
                  className={`block w-full px-8 py-4 text-lg text-center rounded transition-colors duration-150 ${
                    pathname === item.url
                      ? "text-pink-bg bg-gray-100 dark:bg-gray-900"
                      : "hover:bg-gray-100 dark:hover:bg-gray-900"
                  }`}
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
                aria-current={pathname === "/auth" ? "page" : undefined}
                className={`block w-full px-8 py-4 text-lg text-center rounded font-bold transition-colors duration-150 ${
                  pathname === "/auth"
                    ? "text-pink-bg bg-gray-100 dark:bg-gray-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-900"
                }`}
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
}
