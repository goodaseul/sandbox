import { apiFetch } from "@/lib/api";

export interface signInRequest {
  email: string;
  password: string;
}

export interface signInResponse {
  token: string;
}

export interface signUpRequest {
  email: string;
  password: string;
  name: string;
  companyName: string;
}

export interface signUpResponse {
  // API 응답 구조에 맞게 수정
  email: string;
  password: string;
  name: string;
  companyName: string;
}

export function signIn(data: signInRequest) {
  return apiFetch<signInResponse>("/auths/signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function signUp(data: signUpRequest) {
  return apiFetch<signUpResponse>("/auths/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getUser() {
  return apiFetch("auths/user");
}
