"use client";

import { useParams } from "next/navigation";
import Participants from "./_components/Participants";
import { useGatheringsParticipant } from "@/hooks/queries/gatherings";

export default function GatheringDetailPage() {
  const { id } = useParams<{ id: string }>();
  const gatheringId = Number(id);

  const {
    data: participants,
    isLoading,
    isError,
  } = useGatheringsParticipant({
    id: gatheringId,
    offset: 0,
    sortOrder: "asc",
  });

  return (
    <div>
      <h1>모임 상세</h1>
      <p className="flex items-center">
        참여자
        {gatheringId}
      </p>
      {participants?.length === 0 ? (
        <p>아직 모임에 참가한 사람이 없습니다</p>
      ) : (
        <Participants participants={participants ?? []} />
      )}
    </div>
  );
}
