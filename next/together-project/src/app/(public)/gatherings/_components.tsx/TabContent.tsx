import { GatheringsResponse } from "@/api/types/gatherings";
import Card from "@/components/Card";

export default function TabContent({
  filteredGathergins,
}: {
  filteredGathergins: GatheringsResponse | undefined;
}) {
  return <Card gatheringSource={filteredGathergins} />;
}
