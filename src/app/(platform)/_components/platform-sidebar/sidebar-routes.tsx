"use client";

import { SidebarItem } from "@/app/(platform)/_components/platform-sidebar/sidebar-item";
import { ChartLine, Cog, Home, Mailbox, Mails } from "lucide-react";
import { usePathname } from "next/navigation";

export const SidebarRoutes = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-1 px-3">
      <SidebarItem
        href="/home"
        icon={Home}
        isActive={pathname === "/home"}
        label="Home"
      />
      <SidebarItem
        href="/campaigns"
        icon={Mails}
        isActive={pathname === "/campaigns"}
        label="Campaigns"
      />
      <SidebarItem
        href="/contacts"
        icon={Mailbox}
        isActive={pathname === "/contacts"}
        label="Contacts"
      />
      <SidebarItem
        href="/analytics"
        icon={ChartLine}
        isActive={pathname === "/analytics"}
        label="Analytics"
      />
      <SidebarItem
        href="/settings"
        icon={Cog}
        isActive={pathname === "/settings"}
        label="Settings"
      />
    </ul>
  );
};
