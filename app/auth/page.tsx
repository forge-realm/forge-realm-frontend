"use client"

import Image from "next/image";
import Link from "next/link";
import { raleway } from "@/lib/fonts";
import {Wallet} from "lucide-react";
import { PushUniversalAccountButton, PushUI, usePushWalletContext } from "@pushchain/ui-kit";
import { useAppDispatch } from "@/lib/hooks";
import { walletConnected } from "@/lib/features/user/userSlice";
import { setLoadingState } from "@/lib/features/ui/uiSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo";

export default function ConnectWalletPage() {
  const { universalAccount, connectionStatus, handleUserLogOutEvent } = usePushWalletContext();

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if(universalAccount && connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED) {
      dispatch(setLoadingState('wallet-connected'))
      dispatch(walletConnected(universalAccount.address))
      router.push('/dashboard')
    }
  }, [universalAccount]) 

  return (
    <main className={`flex min-h-screen bg-soft-charcoal justify-center items-center ${raleway.className}`}>
      <div className="bg-midnight-ink max-w-md w-full p-8 rounded-xl shadow-lg flex flex-col items-center text-parchment-white">
        <Link href="/" className={`mb-10 block font-bold uppercase text-5xl`}>
          <Logo className="text-3xl" />
        </Link>
        <h1 className="text-2xl font-bold text-parchment-white mb-2">
          Connect Your Wallet
        </h1>
        <p className="text-center text-cream-bg mb-6">
          Sign in with your crypto wallet to get started on the Forge Realm marketplace!
        </p>
        <div className="w-full flex flex-col gap-4">
          {/* Example wallet button #1 */}
          <button type="button" aria-label="Connect wallet button" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black-bg text-cream-bg dark:bg-cream-bg dark:text-black-bg rounded-lg h-[55px] font-medium hover:scale-105 transition cursor-pointer relative">
            <Wallet />
            Connect Wallet
            <span className="absolute w-full opacity-0">
            <PushUniversalAccountButton />
            </span>
          </button>
        </div>
        <p className="text-sm text-cream-bg mt-6">
          Don&apos;t have a wallet?{" "}
          <Link href="https://metamask.io/download/" target="_blank" className="text-pink-bg underline">
            Get MetaMask
          </Link>
        </p>
        <Link href="/" className="mt-8 text-pink-bg hover:underline font-medium">
          &larr; Back to home
        </Link>
      </div>
    </main>
  );
}
