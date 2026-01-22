import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "@/api/auth";
import { userQueryKey } from "../user/queryKey";

export default function useSignOutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      localStorage.removeItem("token");
      queryClient.removeQueries({
        queryKey: userQueryKey.user,
      });
    },
  });
}
