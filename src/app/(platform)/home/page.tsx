import { HomeAudienceSummaryCard } from "@/app/(platform)/home/_components/home-audience-summary-card";
import { HomeCampaignSummaryCard } from "@/app/(platform)/home/_components/home-campaign-summary-card";
import { HomePlatformHeader } from "@/app/(platform)/home/_components/home-platform-header";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full w-full md:pl-[300px]">
      <HomePlatformHeader />
      <div className="flex flex-col gap-y-4 px-4 mt-8">
        <HomeCampaignSummaryCard />
        <HomeAudienceSummaryCard />
      </div>
    </div>
  );
}
