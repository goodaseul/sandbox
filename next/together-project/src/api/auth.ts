import { apiFetch } from "@/lib/api";
import {
  signUpRequest,
  signUpResponse,
  signInRequest,
  signInResponse,
} from "./types/auth";

export function signUp(data: signUpRequest) {
  return apiFetch<signUpResponse>("/auths/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function signIn(data: signInRequest) {
  return apiFetch<signInResponse>("/auths/signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getUser() {
  return apiFetch("auths/user");
}
