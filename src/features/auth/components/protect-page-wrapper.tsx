import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

/**
 *
 * Generic wrapper for protecting pages.
 * Instead of checking for session in each page,
 * you can use this wrapper to protect pages, which allows
 * pages to be server rendered. (no async)
 */
export const ProtectPageWrapper = async ({
  children,
  redirectPath = "/login",
}: {
  children: React.ReactNode;
  redirectPath?: string;
}) => {
  const session = await auth();
  if (!session) {
    redirect(redirectPath);
  }
  return <>{children}</>;
};

export default ProtectPageWrapper;
