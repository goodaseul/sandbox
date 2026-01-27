import { useQuery } from "@tanstack/react-query";
import { gatheringsQueryKey } from "./queryKey";
import { getGatheringsMadeMe } from "@/api/gatherings";
import { GatheringsResponse } from "@/api/types/gatherings";

export default function useGatheringsMadeMe() {
  return useQuery<GatheringsResponse>({
    queryKey: gatheringsQueryKey.me(),
    queryFn: getGatheringsMadeMe,
  });
}
