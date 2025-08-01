import { client } from "@/lib/hono";
import { OrgsQueryKey } from "@/lib/query-keys";
import { useQuery } from "@tanstack/react-query";

export const useGetHomeData = () =>
  useQuery({
    queryFn: async () => {
      const response = await client.api.home.$get();
      if (!response.ok) throw new Error("Failed to fetch home data");

      const { data } = await response.json();
      return data;
    },
    queryKey: OrgsQueryKey,
  });
