"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const HomeCampaignSummaryCard = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Campaign Summary</CardTitle>
        <CardDescription>From DATE to DATE</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">
              Active Campaigns
            </span>
            <span className="text-lg font-semibold">1,234</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">
              Completed Campaigns
            </span>
            <span className="text-lg font-semibold">45</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const HomeCampaignSummaryCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Campaign Summary</CardTitle>
        <CardDescription>Loading campaign data...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between">
            <Skeleton className="w-1/2 h-6" />
            <Skeleton className="w-1/4 h-6" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-1/2 h-6" />
            <Skeleton className="w-1/4 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
