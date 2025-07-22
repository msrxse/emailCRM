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
import { OauthButtons } from "@/features/auth/components/oauth-buttons";

interface LoginWrapperProps {
  headerDescription?: string;
  headerLabel?: string;
}
export const LoginWrapper = ({
  headerDescription,
  headerLabel,
}: LoginWrapperProps) => (
  <Card className="h-full pb-8 px-8 shadow-md w-full">
    <CardHeader className="px-0">
      <CardTitle>{headerLabel}</CardTitle>
      <CardDescription>{headerDescription}</CardDescription>
    </CardHeader>
    <CardContent className="pb-0 px-0 space-y-5">
      <OauthButtons />
    </CardContent>
  </Card>
);
