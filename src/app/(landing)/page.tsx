"use client";
import {
  EmailForm,
  EmailFormValues,
} from "@/features/email/components/email-form";

export default function LandingPage() {
  const sendEmail = (values: EmailFormValues): void => {
    console.log(values);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col w-[50%]">
        <EmailForm onSubmit={sendEmail} />
      </div>
    </div>
  );
}
