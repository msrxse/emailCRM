import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  isActive: boolean;
  label: string;
}

export const SidebarItem = ({
  href,
  icon: Icon,
  isActive,
  label,
}: SidebarItemProps) => (
  <Link href={href}>
    <div
      className={cn(
        "bg-transparent  items-center p-3  flex flex-row text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
        isActive && "bg-sky-500/10 text-sky-700"
      )}
    >
      <Icon className="mr-2 size-4 stroke-2" />
      <span className="font-medium text-md">{label}</span>
    </div>
  </Link>
);
