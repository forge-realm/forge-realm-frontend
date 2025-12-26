"use client"

import DashboardHero from "@/components/dashboard/hero";
import DashboardMarket from "@/components/dashboard/market";
import { useAppDispatch } from "@/lib/hooks";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useEffect } from "react";
import { getUserBaseNfts } from "@/lib/features/user/userSlice";

export default function DashboardPage() {
  const {universalAccount, connectionStatus} = usePushWalletContext();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if(connectionStatus === "connected" && universalAccount) {
      dispatch(getUserBaseNfts(universalAccount.address))
    }
  }, [universalAccount, connectionStatus])
  return (
    <div className="pt-28 md:px-10 px-5 flex flex-wrap gap-8">
      <DashboardHero />
      <DashboardMarket />`  `
    </div>
  );
}
