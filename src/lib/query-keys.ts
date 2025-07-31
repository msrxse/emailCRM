import { QueryClient } from "@tanstack/react-query";

type QueryKey = string[];
type QueryKeyValuePairs = { [key: string]: QueryKey[] };

export const OrgsQueryKey = ["orgs"];

export const queryKeyValuePairs: QueryKeyValuePairs = {
  orgs: [OrgsQueryKey],
};

export const invalidateQueryKeys = (
  mutatedQueryKeys: (keyof QueryKeyValuePairs)[],
  queryClient: QueryClient
) => {
  const queryKeys: QueryKey[] = [];
  mutatedQueryKeys.forEach((key) => {
    const keys = queryKeyValuePairs[key];
    if (keys) {
      keys.forEach((key) => {
        if (!queryKeys.includes(key)) {
          queryKeys.push(key);
        }
      });
    }
  });
  queryKeys.forEach((key) => queryClient.invalidateQueries({ queryKey: key }));
};
