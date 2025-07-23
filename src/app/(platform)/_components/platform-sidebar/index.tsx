import { SidebarLogo } from "@/app/(platform)/_components/platform-sidebar/sidebar-logo";
import { SidebarRoutes } from "@/app/(platform)/_components/platform-sidebar/sidebar-routes";

export const PlatformSidebar = () => (
  <aside className="fixed flex-col h-full hidden left-0 sm:flex shrink-0 w-[300px] shadow-sm bg-white ">
    <SidebarLogo />
    <SidebarRoutes />
  </aside>
);
