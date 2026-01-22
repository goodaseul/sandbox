import { useQuery } from "@tanstack/react-query";
import { userQueryKey } from "./queryKey";
import { getUser } from "@/api/user";

export default function useGetUser() {
  return useQuery({
    queryKey: userQueryKey.user,
    queryFn: getUser,
    retry: false,
  });
}
