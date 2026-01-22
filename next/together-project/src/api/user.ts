import { apiFetch } from "@/lib/api";
import { UserRequest } from "./types/user";

export function getUser(): Promise<UserRequest> {
  return apiFetch("/auths/user");
}
