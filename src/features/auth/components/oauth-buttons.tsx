import { FaGithub } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const OauthButtons = () => (
  <div className="flex flex-col gap-y-2">
    <Button
      variant="default"
      className="w-full"
      onClick={() => signIn("google")}
    >
      <FcGoogle className="mr-2 size-5" />
      Log in with Google
    </Button>
    <Button
      variant="default"
      className="w-full"
      onClick={() => signIn("github")}
    >
      <FaGithub className="mr-2 size-5" />
      Log in with GitHub
    </Button>
  </div>
);
