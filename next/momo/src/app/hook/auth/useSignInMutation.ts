import { useMutation } from "@tanstack/react-query";
import SignIn from "../../api/auth/signin";

export default function useSignInMutation() {
  return useMutation({
    mutationFn: SignIn,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);
      console.log("로그인 성공");
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
