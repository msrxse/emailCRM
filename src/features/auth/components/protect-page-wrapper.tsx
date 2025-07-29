import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

/**
 * Generic wrapper for protecting pages.
 * You can use this wrapper to protect pages instead
 * of the async protectPage() function.
 *
 * Because protectPage() is async and you
 * cannot mix client components with async functions)
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
