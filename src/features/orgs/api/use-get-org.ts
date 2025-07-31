import { OrgsQueryKey } from "@/lib/query-keys";
import { useQuery } from "@tanstack/react-query";

export const useGetOrg = () =>
  useQuery({
    queryFn: async () => {},
    queryKey: OrgsQueryKey,
  });
