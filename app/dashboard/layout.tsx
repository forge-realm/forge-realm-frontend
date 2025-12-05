"use client"

import React from "react";
import Sidebar from "@/components/sidebar";
import useConnectionRedirect from "@/hooks/useConnectionRedirect";
import DashboardNavbar from "@/components/dashboard/navbar";

// export const metadata = {
//   title: "Dashboard",
//   description: "Dashboard Section",
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useConnectionRedirect();
  return (
    <div className="flex min-h-screen bg-parchment-white">
      <Sidebar />
      <main className="flex-1 p-6 max-h-screen relative overflow-auto">
        <DashboardNavbar />
        {children}
        </main>
    </div>
  );
}
