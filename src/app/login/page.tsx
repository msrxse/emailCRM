import { LoginWrapper } from "@/features/auth/components/login-wrapper";
import { redirectAuthenticated } from "@/features/auth/utils";

const LoginPage = async () => {
  await redirectAuthenticated();

  return (
    <div className={`bg-[url(/hero.svg)] bg-cover bg-top flex flex-col h-full`}>
      <div className="flex flex-col h-screen w-full items-center justify-center z-[4]">
        <div className="h-full md:h-auto md:w-[420px] w-full">
          <LoginWrapper
            headerDescription="Sign in to your account with your Google or GitHub account."
            headerLabel="Welcome to EmailCRM!"
          />
        </div>
      </div>
      <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))] absolute inset-0 z-[1]" />
    </div>
  );
};

export default LoginPage;
