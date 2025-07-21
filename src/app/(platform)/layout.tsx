import { ReactNode } from "react";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-100">
      <main className="flex h-screen w-full items-center justify-center bg-slate-100">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
