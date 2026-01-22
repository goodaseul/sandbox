import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn } from "@/api/auth";
import { getUser } from "@/api/user";
import { userQueryKey } from "../user/queryKey";

export default function useSignInMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signIn,
    onSuccess: async (data) => {
      localStorage.setItem("token", data.token);

      const user = await queryClient.fetchQuery({
        queryKey: userQueryKey.user,
        queryFn: getUser,
      });

      queryClient.setQueryData(userQueryKey.user, user);
    },
  });
}
