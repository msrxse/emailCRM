import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={30}
          width={30}
          style={{ width: 30, height: 30 }} // Image warning issue - If you use CSS to change the size of your image, also include the styles 'width: "auto" or 'height: "auto"' to maintain the aspect ratio
        />
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          EmailCRM
        </p>
      </div>
    </Link>
  );
};
