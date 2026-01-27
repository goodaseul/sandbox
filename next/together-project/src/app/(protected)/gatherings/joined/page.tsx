"use client";

import Card from "@/components/Card";
import useGatheringsJoined from "@/hooks/queries/gatherings/useGatheringsJoined";

export default function JoinedPage() {
  const { data: joined } = useGatheringsJoined();
  return (
    <div className="p-5">
      <h1>내가 참여한 모임 목록</h1>
      <Card gatheringSource={joined} />
    </div>
  );
}
