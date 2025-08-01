import ProtectPageWrapper from "@/features/auth/components/protect-page-wrapper";

import HomeContents from "@/app/(platform)/home/_components/home-contents";

export default function HomePage() {
  return (
    <ProtectPageWrapper>
      <HomeContents />
    </ProtectPageWrapper>
  );
}
