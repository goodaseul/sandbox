import { apiFetch } from "@/lib/api";
import {
  SignUpRequest,
  SignUpResponse,
  SignInRequest,
  SignInResponse,
} from "./types/auth";

export function signUp(data: SignUpRequest) {
  return apiFetch<SignUpResponse>("/auths/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function signIn(data: SignInRequest) {
  return apiFetch<SignInResponse>("/auths/signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function signOut() {
  return apiFetch("/auths/signout", {
    method: "POST",
  });
}
