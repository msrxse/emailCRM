import { PlatformSidebar } from "@/app/(platform)/_components/platform-sidebar";
import { ReactNode } from "react";

const PlatformLayout = ({ children }: { children: ReactNode }) => (
  <main className="flex h-screen w-full items-center justify-center bg-slate-100">
    <PlatformSidebar />
    {children}
  </main>
);

export default PlatformLayout;
