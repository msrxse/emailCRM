import { OnboardingContents } from "@/app/onboarding/_components/onboarding-content";
import { protectPage } from "@/features/auth/utils";

const OnboardingPage = async () => {
  await protectPage();

  return <OnboardingContents />;
};

export default OnboardingPage;
