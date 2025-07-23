import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
};
