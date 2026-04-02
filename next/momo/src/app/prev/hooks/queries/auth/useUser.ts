import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKey";
import { getUser } from "@/src/api/auth/user";

export const useUser = () => {
  return useQuery({
    queryKey: queryKeys.user.all,
    queryFn: getUser,
  });
};
