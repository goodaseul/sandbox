import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CancelData } from "../../api/data/cancelData";
import { queryKeys } from "./queryKey";
import { GetDataResponses } from "../../api/types/data";
export const useCancelDataMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: CancelData,

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.data.joined });

      const previousJoined = queryClient.getQueryData(queryKeys.data.joined);

      queryClient.setQueryData(
        queryKeys.data.joined,
        (old: GetDataResponses[]) => {
          return old?.filter((item) => item.id !== id.id);
        },
      );

      return { previousJoined };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKeys.data.joined, context?.previousJoined);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.data.joined });
      queryClient.invalidateQueries({ queryKey: queryKeys.data.lists() });
    },
  });
};
