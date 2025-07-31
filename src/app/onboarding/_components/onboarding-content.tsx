"use client";

import { ArrowLeft } from "lucide-react";
import {
  BusinessAddressFormValues,
  BusinessAddressStep,
} from "./business-address-step";
import { BusinessInfoStep } from "./business-info-step";
import type { BusinessInfoFormValues } from "./business-info-step";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreateNewOrg } from "@/features/orgs/api/use-create-new-org";
import { v4 as uuidv4 } from "uuid";

enum OnboardingStep {
  BusinessInfo,
  BusinessAddress,
}

export const OnboardingContents = () => {
  const router = useRouter();
  const createOrgMutation = useCreateNewOrg();
  const [currentStep, setCurrentStep] = useState(OnboardingStep.BusinessInfo);
  const [orgInfo, setOrgInfo] = useState<BusinessInfoFormValues | null>(null);

  const onSubmitBusinessInfo = (businessValues: BusinessInfoFormValues) => {
    setOrgInfo(businessValues);
    setCurrentStep(OnboardingStep.BusinessAddress);
  };
  const onSubmitAllBusinessInfo = (
    addressValues: BusinessAddressFormValues
  ) => {
    if (!orgInfo) return;
    return createOrgMutation.mutate(
      {
        ...orgInfo,
        ...addressValues,
        id: uuidv4(),
      },
      {
        onSuccess: () => router.push("/home"),
      }
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case OnboardingStep.BusinessInfo:
        return (
          <div className="h-screen flex flex-col gay-y-2 items-center w-full bg-slate-100">
            <div className="h-14 px-4 relative flex items-center justify-center w-full border-b shadow-sm bg-white flex-shrink-0">
              <ArrowLeft
                className="absolute left-4 top-4"
                onClick={() => router.push("/home")}
              />
              <h1 className="text-3xl font-bold text-neutral-800">
                Tell us about your business
              </h1>
            </div>

            <BusinessInfoStep
              defaultValues={{
                imageUrl: orgInfo?.imageUrl ?? "",
                name: orgInfo?.name ?? "",
              }}
              onSubmit={onSubmitBusinessInfo}
            />
          </div>
        );
        break;
      case OnboardingStep.BusinessAddress:
        return (
          <div className="h-screen flex flex-col gay-y-2 items-center w-full bg-slate-100">
            <div className="h-14 px-4 relative flex items-center justify-center w-full border-b shadow-sm bg-white flex-shrink-0">
              <ArrowLeft
                className="absolute left-4 top-4"
                onClick={() => setCurrentStep(OnboardingStep.BusinessInfo)}
              />

              <h1 className="text-2xl font-bold text-neutral-800">
                {`What is your business address for `}
                <div className="inline mb-4 border shadow-sm px-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                  {orgInfo?.name}
                </div>
                {` ?`}
              </h1>
            </div>
            <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
              We are required to have this information to comply with anti-spam
              laws.
            </div>
            <BusinessAddressStep
              defaultValues={{
                addressCity: "",
                addressState: "",
                addressStreet2: "",
                addressStreet: "",
                addressCountry: "",
                addressZip: "",
              }}
              onSubmit={onSubmitAllBusinessInfo}
            />
            <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
              Your business address will be appended to the bottom of every
              email you send via this platform.
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col h-screen items-center justify-center w-full">
            <h1>Invalid step</h1>
          </div>
        );
        break;
    }
  };

  return renderStep();
};
