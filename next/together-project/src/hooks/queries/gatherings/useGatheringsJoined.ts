import { useQuery } from "@tanstack/react-query";
import { gatheringsQueryKey } from "./queryKey";
import { getGatheringsJoined } from "@/api/gatherings";
import { GatheringsJoinedResponses } from "@/api/types/gatherings";

export default function useGatheringsJoined() {
  return useQuery<GatheringsJoinedResponses>({
    queryKey: gatheringsQueryKey.joined(),
    queryFn: getGatheringsJoined,
  });
}
