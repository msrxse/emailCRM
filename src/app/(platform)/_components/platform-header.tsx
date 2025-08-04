import {
  UserButton,
  UserButtonSkeleton,
} from "@/features/auth/components/user-button";
import { OrgToggle } from "@/features/orgs/components/org-toggle";
import { Orgs } from "@/db/org-schema";

interface PlatformHeaderProps {
  children: React.ReactNode;
  primaryOrg: typeof Orgs.$inferSelect;
  userOrgs: (typeof Orgs.$inferSelect)[];
}

export const PlatformHeader = ({
  children,
  primaryOrg,
  userOrgs,
}: PlatformHeaderProps) => {
  return (
    <div className="flex h-14 border-b shadow-sm bg-white items-center px-4">
      {children}
      <div className="nl-auto pl-10">
        <div className="flex gap-x-2">
          <OrgToggle primaryOrg={primaryOrg} userOrgs={userOrgs} />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export const PlatformHeaderSkeleton = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex h-14 border-b shadow-sm bg-white items-center px-4">
    {children}
    <div className="flex gap-x-2">
      <UserButtonSkeleton />
    </div>
  </div>
);
