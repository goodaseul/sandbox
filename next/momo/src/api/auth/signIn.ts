import { fetcher } from "../fetcher";
import { SignInRequest } from "../types/auth";

export const signIn = (data: SignInRequest) => {
  return fetcher("auths/signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
