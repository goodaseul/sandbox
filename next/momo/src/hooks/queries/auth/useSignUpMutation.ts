import { signUp } from "@/src/api/auth/signUp";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log("회원가입 성공", data);
    },
    onError: (error) => {
      console.error("회원가입 실패", error);
    },
  });
};
