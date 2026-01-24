import { useQuery } from "@tanstack/react-query";
import { gatheringsQueryKey } from "./queryKey";
import { GatheringsFilter } from "@/api/gatherings/types";
import { getGatherings } from "@/api/gatherings/query";

export default function useGatherings(filters?: GatheringsFilter) {
  return useQuery({
    queryKey: gatheringsQueryKey.list(filters),
    queryFn: () => getGatherings(filters),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
  });
}
