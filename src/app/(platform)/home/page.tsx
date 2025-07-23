import { protectPage } from "@/features/auth/utils";

import { HomeAudienceSummaryCard } from "./_components/home-audience-summary-card";
import { HomeCampaignSummaryCard } from "./_components/home-campaign-summary-card";
import { HomePlatformHeader } from "./_components/home-platform-header";

export default async function HomePage() {
  await protectPage();

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
