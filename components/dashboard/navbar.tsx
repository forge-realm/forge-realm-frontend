"use client"

import { raleway } from "@/lib/fonts"
import { Search, User } from "lucide-react"
import { usePushWalletContext, PushUniversalAccountButton, PushUI } from "@pushchain/ui-kit"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const { handleUserLogOutEvent, connectionStatus } = usePushWalletContext();
  const router = useRouter();

  useEffect(() => {
    if (connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.NOT_CONNECTED) {
      router.push('/')
    }
  }, [connectionStatus])

  return (
    <nav className={` ${raleway.className} flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200 rounded-full fixed top-4 left-[55%] -translate-x-[50%] lg:w-[1080px] shadow-sm w-full z-10`}>

      {/* Search Bar */}
      <form
        action="/search"
        method="GET"
        role="search"
        aria-label="Sitewide"
        className="flex items-center flex-1 max-w-md rounded-full bg-gray-100 px-4 py-2 border-none outline-none"
      >
        <label htmlFor="dashboard-search" className="sr-only">
          Search dashboard
        </label>
        <input
          type="search"
          id="dashboard-search"
          name="q"
          className="flex-1 bg-transparent border-none focus:outline-none px-2 py-1"
          placeholder="Search dashboard..."
          aria-label="Search dashboard"
          autoComplete="off"
        />
        <button
          type="submit"
          className="ml-2 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-pink-bg text-white hover:bg-[#4e2196] transition"
          aria-label="Submit search"
        >
          <Search className="w-5" />
        </button>
      </form>


      {/* User Account Details / Responsive avatar + balance */}
      <div className="flex items-center gap-4 ml-4">
        {/* Disconnect Button */}
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-pink-bg text-white font-semibold text-sm hover:bg-btn-bg transition focus:outline-none focus:ring-2 focus:ring-pink-bg"
          aria-label="Disconnect"
          onClick={() => handleUserLogOutEvent()}
        >
          Disconnect
        </button>
        {/* User Icon with wallet address and dropdown */}
        <div
          className="flex items-center gap-2 rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-bg transition group bg-gray-100 hover:bg-gray-200 relative"
          tabIndex={0}
          aria-label="Account menu"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <User className="w-8 h-8 text-gray-700" />
          <span className="text-sm font-mono text-gray-900 hidden sm:block">
            0x12...bc34
          </span>
          <svg
            className="w-4 h-4 text-gray-500 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <title>Open account menu</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="absolute top-0 h-full w-full rounded-full overflow-hidden opacity-0">
            <PushUniversalAccountButton />
          </span>
        </div>
      </div>
    </nav>
  )
}
