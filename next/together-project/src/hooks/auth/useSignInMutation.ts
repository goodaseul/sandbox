import { signIn } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useSignInMutation() {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
}
