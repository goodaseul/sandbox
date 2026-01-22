"use client";
import useGatherings from "@/hooks/queries/gatherings/useGatherings";

export default function GatheringsPage() {
  const { data: gatherings } = useGatherings();
  if (!gatherings) return null;
  return (
    <>
      <h1>GatheringsPage</h1>
      {gatherings.map((gathering) => (
        <li key={gathering.id}>{gathering.name}</li>
      ))}
    </>
  );
}
