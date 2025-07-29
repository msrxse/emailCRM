import { SessionProvider } from "next-auth/react";
import QueryProvider from "./query-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <QueryProvider> {children}</QueryProvider>
    </SessionProvider>
  );
};
