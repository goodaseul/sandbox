import { useMutation, useQueryClient } from "@tanstack/react-query";
import createData from "../../api/data/createData";
import { queryKeys } from "./queryKey";

export default function useCreateDataMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => createData(formData),
    onSuccess: () => {
      console.log("성공");
      queryClient.invalidateQueries({ queryKey: queryKeys.data.all });
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
