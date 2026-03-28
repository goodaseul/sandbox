import { signIn } from "@/src/api/auth/signIn";
import { useMutation } from "@tanstack/react-query";

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => console.log("로그인 성공", data),
    onError: (error) => console.error("로그인 실패", error),
  });
};
