import { signIn } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useLoginMutation() {
  return useMutation({
    mutationFn: signIn,
  });
}
