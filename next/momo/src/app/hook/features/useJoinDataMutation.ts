import { useMutation, useQueryClient } from "@tanstack/react-query";
import { JoinData } from "../../api/data/joinData";
import { queryKeys } from "./queryKey";
import { GetDataResponses, GetJoinDataRequest } from "../../api/types/data";

export const useJoinDataMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: GetJoinDataRequest) => JoinData(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.data.joined });
      const previous = queryClient.getQueryData(queryKeys.data.joined);

      queryClient.setQueryData(
        queryKeys.data.joined,
        (old: GetDataResponses[]) => {
          const listData = queryClient.getQueryData<GetDataResponses[]>(
            queryKeys.data.lists(),
          );
          const targetItem = listData?.find((item) => item.id === id.id);
          return targetItem ? [...(old ?? []), targetItem] : old;
        },
      );

      return { previous };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(queryKeys.data.joined, context?.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.data.joined });
      queryClient.invalidateQueries({ queryKey: queryKeys.data.lists() });
    },
  });
};
