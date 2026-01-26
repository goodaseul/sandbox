import { createGatherings } from "@/api/gatherings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { gatheringsQueryKey } from "./queryKey";

export default function useGatheringsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGatherings,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: gatheringsQueryKey.all,
      });
    },
  });
}
