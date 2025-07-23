"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PlatformHeader } from "@/app/(platform)/_components/platform-header";

export const HomePlatformHeader = () => {
  const router = useRouter();

  return (
    <PlatformHeader>
      <div className="flex items-center justify-between gap-x-2 w-full">
        <h1 className="text-xl lg:text-md">Home</h1>
        <div className="flex gap-x-2">
          <Button size="sm" onClick={() => router.push("/campaigns/new")}>
            New Campaign
          </Button>
          <Button
            size="sm"
            onClick={() => router.push("/contacts/add")}
            variant={"outline"}
          >
            Contacts
          </Button>
        </div>
      </div>
    </PlatformHeader>
  );
};
