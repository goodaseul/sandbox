import { useQuery } from "@tanstack/react-query";
import { GetJoinedData } from "../../api/data/getJoinedData";
import { queryKeys } from "./queryKey";

export default function useGetJoinedData() {
  return useQuery({
    queryKey: queryKeys.data.joined,
    queryFn: GetJoinedData,
  });
}
