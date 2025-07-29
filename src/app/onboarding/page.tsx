import ProtectPageWrapper from "@/features/auth/components/protect-page-wrapper";

const OnboardingPage = () => {
  return (
    <ProtectPageWrapper>
      <div>
        <h1 className="text-2xl">Onboarding Page</h1>
      </div>
    </ProtectPageWrapper>
  );
};

export default OnboardingPage;
