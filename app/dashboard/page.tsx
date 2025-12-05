import DashboardHero from "@/components/dashboard/hero";
import DashboardMarket from "@/components/dashboard/market";

export default function DashboardPage() {
  return (
    <div className="pt-28 md:px-10 px-5 flex flex-wrap gap-8">
      <DashboardHero />
      <DashboardMarket />`  `
    </div>
  );
}
