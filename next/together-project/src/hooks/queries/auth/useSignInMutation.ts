import { signIn } from "@/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userQueryKey } from "../user/queryKey";

export default function useSignInMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({
        queryKey: userQueryKey.user,
      });
    },
  });
}
