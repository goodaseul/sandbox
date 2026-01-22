import { useQuery } from "@tanstack/react-query";
import { userQueryKey } from "./queryKey";
import { getUser } from "@/api/user";

export default function useGetUser() {
  const hasToken =
    typeof window !== "undefined" && !!localStorage.getItem("token");
  return useQuery({
    queryKey: userQueryKey.user,
    queryFn: getUser,
    retry: false,
    enabled: hasToken,
  });
}
