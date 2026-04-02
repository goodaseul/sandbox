import { fetcher } from "../fetcher";
import { SignInRequest, SignInResponse } from "../types/auth";

export default function SignIn(data: SignInRequest) {
  return fetcher<SignInResponse>("auths/signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
