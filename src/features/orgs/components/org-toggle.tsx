"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Orgs } from "@/db/org-schema";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { useSetPrimaryOrg } from "@/features/orgs/api/user-set-primary-org";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { toast } from "sonner";

interface OrgToggleProps {
  primaryOrg?: typeof Orgs.$inferSelect;
  userOrgs: (typeof Orgs.$inferSelect)[];
}
export const OrgToggle = ({ primaryOrg, userOrgs }: OrgToggleProps) => {
  const router = useRouter();
  const setPrimaryOrgMutation = useSetPrimaryOrg();

  const onClick = (newPrimaryOrgName: string, orgId: string) =>
    setPrimaryOrgMutation.mutate(
      { orgId },
      {
        onError: (error) =>
          toast("Error!", {
            description: error.message,
          }),
        onSuccess: () =>
          toast("Set as Primary!", {
            description: `Organization ${newPrimaryOrgName} set to primary`,
          }),
      }
    );

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className={cn(
            "border-2 h-12 hover:cursor-pointer items-center justify-center mr-2 w-[125px]",
            primaryOrg && "bg-sky-400 hover:bg-sky-300"
          )}
          disabled={!primaryOrg}
          variant="outline"
        >
          {primaryOrg?.imageUrl && (
            <Image
              alt="org avatar"
              className="bg-sky-500 hover:cursor-pointer hover:bg-sky-300 mr-2"
              height={24}
              src={primaryOrg.imageUrl}
              width={24}
            />
          )}
          <h1 className="font-semibold truncate">
            {primaryOrg?.name ?? "???"}
          </h1>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {primaryOrg && (
          <div className="grid gap-y-4">
            <h4 className="truncate">
              {"Current Org:"}
              <span className="font-medium">{primaryOrg.name}</span>
            </h4>
            <Separator />
            {userOrgs.length > 1 && (
              <div className="flex flex-col gap-y-2">
                <h4 className="truncate"> Switch to Org:</h4>
                {userOrgs
                  ?.filter((org) => org.id !== primaryOrg?.id)
                  .map((org) => (
                    <Button
                      className="justify-start w-full"
                      key={org.id}
                      onClick={() => onClick(org.name, org.id)}
                      variant="outline"
                    >
                      {org.imageUrl && (
                        <Avatar className="bg-sky-500 hover:cursor-pointer hover:bg-sky-300 mr-2 px-0 size-6">
                          <AvatarImage
                            alt="org-image"
                            className="object-cover"
                            src={org.imageUrl}
                          />
                        </Avatar>
                      )}
                      <h4 className="ml-3 truncate">{org.name}</h4>
                    </Button>
                  ))}
                <Separator />
              </div>
            )}
            <Button
              className="w-full"
              onClick={() => router.push("/onboarding")}
            >
              Create New Org
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export const OrgToggleSkeleton = () => (
  <Skeleton className="h-12 mr-2 w-[125px]" />
);
