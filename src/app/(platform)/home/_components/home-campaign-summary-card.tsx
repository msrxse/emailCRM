"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};
