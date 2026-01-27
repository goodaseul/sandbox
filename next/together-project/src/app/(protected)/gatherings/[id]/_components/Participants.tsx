"use client";

import { GatheringParticipantResponses } from "@/api/types/gatherings";

export default function Participants({
  participants,
}: {
  participants: GatheringParticipantResponses;
}) {
  return (
    <ul>
      {participants?.map((participant) => (
        <li key={participant.userId}>{participant.User.name}</li>
      ))}
    </ul>
  );
}
