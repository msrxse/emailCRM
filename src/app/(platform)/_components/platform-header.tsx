import { UserButton } from "@/features/auth/components/user-button";

export const PlatformHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-14 border-b shadow-sm bg-white items-center px-4">
      {children}
      <div className="nl-auto pl-10">
        <div className="flex gap-x-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
