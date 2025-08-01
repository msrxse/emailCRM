import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/features/auth/components/login-button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <LoginButton />
          <Button size="sm" asChild>
            <Link href="/sign-up">Get EmailCRM for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
