import { useQuery } from "@tanstack/react-query";
import { gatheringsQueryKey } from "./queryKey";
import { getGatheringsParticipants } from "@/api/gatherings";
import { GatheringParticipantResponses } from "@/api/types/gatherings";

export function useGatheringsParticipant({
  id,
  offset,
  sortOrder,
}: {
  id: number;
  offset: number;
  sortOrder?: "asc" | "desc";
}) {
  return useQuery<GatheringParticipantResponses>({
    queryKey: [gatheringsQueryKey.participants, id, offset, sortOrder],
    queryFn: () =>
      getGatheringsParticipants(id, {
        limit: 5,
        offset,
        sortOrder,
      }),
    enabled: !!id,
  });
}
