import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/hono";
import { invalidateQueryKeys, OrgsQueryKey } from "@/lib/query-keys";

type RequestType = InferRequestType<typeof client.api.orgs.$post>["json"];
type ResponseType = InferResponseType<typeof client.api.orgs.$post>;

export const useCreateNewOrg = (): UseMutationResult<
  ResponseType,
  Error,
  RequestType
> => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.orgs.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      // Instead of manually giving queries here we use a helper function
      invalidateQueryKeys(OrgsQueryKey, queryClient);
    },
  });
};
