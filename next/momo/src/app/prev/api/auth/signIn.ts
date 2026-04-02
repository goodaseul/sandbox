import { fetcher } from "../fetcher";
import { SignInRequest, SignInResponse } from "../types/auth";

export const signIn = (data: SignInRequest) => {
  return fetcher<SignInResponse>("auths/signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
