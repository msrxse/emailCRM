import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

import { ReactNode } from "react";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className=" bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
