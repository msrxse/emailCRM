"use client";

import { useGetHomeData } from "@/app/(platform)/home/_components/api/use-get-home-data";
import {
  HomeAudienceSummaryCard,
  HomeAudienceSummaryCardSkeleton,
} from "./home-audience-summary-card";
import {
  HomeCampaignSummaryCard,
  HomeCampaignSummaryCardSkeleton,
} from "./home-campaign-summary-card";
import {
  HomePlatformHeader,
  HomePlatformHeaderSkeleton,
} from "./home-platform-header";

export default function HomeContents() {
  const { data, isLoading } = useGetHomeData();

  if (isLoading)
    return (
      <div className="flex flex-col h-full w-full md:pl-[300px]">
        <HomePlatformHeaderSkeleton />
        <div className="flex flex-col gap-y-4 px-4 mt-8">
          <HomeCampaignSummaryCardSkeleton />
          <HomeAudienceSummaryCardSkeleton />
        </div>
      </div>
    );

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
