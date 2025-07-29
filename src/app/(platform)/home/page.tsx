import ProtectPageWrapper from "@/features/auth/components/protect-page-wrapper";

import { HomeAudienceSummaryCard } from "./_components/home-audience-summary-card";
import { HomeCampaignSummaryCard } from "./_components/home-campaign-summary-card";
import { HomePlatformHeader } from "./_components/home-platform-header";

export default function HomePage() {
  return (
    <ProtectPageWrapper>
      <div className="flex flex-col h-full w-full md:pl-[300px]">
        <HomePlatformHeader />
        <div className="flex flex-col gap-y-4 px-4 mt-8">
          <HomeCampaignSummaryCard />
          <HomeAudienceSummaryCard />
        </div>
      </div>
    </ProtectPageWrapper>
  );
}
