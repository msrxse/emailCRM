import { Poppins } from "next/font/google";
import Link from "next/link";
import { Medal } from "lucide-react";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { redirectAuthenticated } from "@/features/auth/utils";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function LandingPage() {
  await redirectAuthenticated();

  return (
    <div className="flex h-screen w-full items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 email management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          emails that help teams move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pt-3 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Colaborate manage projects, and reach new productivity peaks. From high
        rises to the home office, the way your team works is unique—accomplish
        it all with emailCRM.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get emailCRM for free</Link>
      </Button>
    </div>
  );
}
