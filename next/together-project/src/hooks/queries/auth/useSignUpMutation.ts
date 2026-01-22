import { signUp } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useSignUpMutation() {
  return useMutation({
    mutationFn: signUp,
  });
}
