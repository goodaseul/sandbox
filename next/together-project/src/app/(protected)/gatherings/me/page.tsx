"use client";

import Card from "@/components/Card";
import useGatheringsMadeMe from "@/hooks/queries/gatherings/useGatheringMadeMe";

export default function MadeMePage() {
  const { data: madeMe } = useGatheringsMadeMe();
  return (
    <div className="p-5">
      <h1>내가 만든 모임 목록</h1>
      <Card gatheringSource={madeMe} />
    </div>
  );
}
