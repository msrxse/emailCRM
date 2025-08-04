import { QueryClient } from "@tanstack/react-query";

type QueryKey = string[];
type QueryKeyValuePairs = { [key: string]: QueryKey[] };

export const HomeQueryKey = ["home"];
export const OrgsQueryKey = ["orgs"];
export const UserOrgsQueryKey = ["userOrgs"];

export const queryKeyValuePairs: QueryKeyValuePairs = {
  orgs: [HomeQueryKey, OrgsQueryKey],
  userOrgs: [HomeQueryKey, UserOrgsQueryKey],
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
