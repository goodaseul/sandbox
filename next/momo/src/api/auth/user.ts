import { fetcher } from "../fetcher";
import { UserResponse } from "../types/auth";

export const getUser = () => {
  return fetcher<UserResponse>("auths/user");
};
