import { useQuery } from "@tanstack/react-query";
import GetData from "../../api/data/getData";
import { queryKeys } from "./queryKey";

export default function useGetData() {
  return useQuery({
    queryKey: queryKeys.data.all,
    queryFn: GetData,
  });
}
