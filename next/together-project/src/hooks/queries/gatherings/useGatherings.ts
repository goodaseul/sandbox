import { useQuery } from "@tanstack/react-query";
import { gatheringsQueryKey } from "./queryKey";
import { getGatherings } from "@/api/gatherings";

export default function useGatherings() {
  return useQuery({
    queryKey: gatheringsQueryKey.all,
    queryFn: getGatherings,
  });
}
