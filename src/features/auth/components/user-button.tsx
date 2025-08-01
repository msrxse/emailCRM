"use client";

import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Skeleton } from "@/components/ui/skeleton";
import { CreditCard, Loader, LogOut } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const UserButton = () => {
  const session = useSession();

  if (session.status === "loading")
    return <Loader className="size-8 animate-spin text-muted-foreground" />;
  if (session.status === "unauthenticated" || !session.data) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="hover:opacity-75 transition-opacity">
          <AvatarImage
            alt={session.data.user?.name ?? ""}
            src={session.data.user?.image ?? ""}
          />
          <AvatarFallback className="bg-sky-500 font-medium text-white">
            {session.data.user?.name?.charAt(0).toUpperCase() ?? "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuItem
          className="h-10 hover:bg-sky-100"
          disabled={false}
          onClick={() => {}}
        >
          <CreditCard className="mr-2 size-4" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="h-10 hover:bg-sky-100"
          disabled={false}
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const UserButtonSkeleton = () => (
  <Skeleton className="rounded-full size-8 bg-white" />
);
