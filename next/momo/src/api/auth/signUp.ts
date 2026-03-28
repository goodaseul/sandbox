import { fetcher } from "../fetcher";
import { SignUpRequest } from "../types/auth";

export const signUp = (data: SignUpRequest) => {
  return fetcher("auths/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
