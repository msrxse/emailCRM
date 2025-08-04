import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/hono";
import { invalidateQueryKeys, UserOrgsQueryKey } from "@/lib/query-keys";

type RequestType = InferRequestType<
  (typeof client.api)["user-orgs"]["$patch"]
>["json"];
type ResponseType = InferResponseType<
  (typeof client.api)["user-orgs"]["$patch"]
>;

export const useSetPrimaryOrg = (): UseMutationResult<
  ResponseType,
  Error,
  RequestType
> => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api["user-orgs"]["$patch"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      // Instead of manually giving queries here we use a helper function
      return invalidateQueryKeys(UserOrgsQueryKey, queryClient);
    },
  });
};
