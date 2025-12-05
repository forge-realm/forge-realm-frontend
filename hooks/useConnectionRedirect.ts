"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAppSelector } from "@/lib/hooks"

export default function useConnectionRedirect () {
  const router = useRouter();
  const pathname = usePathname()
  const loadingState = useAppSelector((state) => state.ui.loadingState)
  const walletAddress = useAppSelector((state) => state.user.walletAddress)

  useEffect(() => {
    if(loadingState === "none" && !walletAddress && pathname === '/dashboard') {
      router.push('/')
    }
  }, [walletAddress, loadingState, pathname, router])

  return walletAddress
}