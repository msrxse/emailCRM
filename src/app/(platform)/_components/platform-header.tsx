import { UserButton } from "@/features/auth/components/user-button";

export const PlatformHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b-2 flex h-[68px] items-center p-4 shadow-sm w-full">
      {children}
      <div className="nl-auto pl-10">
        <div className="flex gap-x-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
