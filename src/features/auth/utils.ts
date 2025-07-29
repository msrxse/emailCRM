import { redirect } from "next/navigation";
import { auth } from "@/app/auth";

export const redirectAuthenticated = async () => {
  const session = await auth();

  if (session) {
    return redirect("/home");
  }

  return null;
};

/**
 * Use <ProtectPageWrapper/> rather
 */
export const protectPage = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return {
    id: session.user?.id || "",
    email: session.user?.email || "",
    name: session.user?.name || "",
    image: session.user?.image || "",
  };
};
