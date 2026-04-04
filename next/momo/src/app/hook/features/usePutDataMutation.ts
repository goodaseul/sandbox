import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PutData } from "../../api/data/putData";
import { queryKeys } from "./queryKey";

export const usePutDataMuation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PutData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.data.lists() });
    },
  });
};
