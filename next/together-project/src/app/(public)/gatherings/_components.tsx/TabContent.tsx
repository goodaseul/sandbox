import { GatheringsResponse } from "@/api/types/gatherings";
import Image from "next/image";

export default function TabContent({
  filteredGathergins,
}: {
  filteredGathergins: GatheringsResponse | undefined;
}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {filteredGathergins?.map((gathering) => (
        <li key={gathering.id} className="border border-point rounded-md p-4">
          <p>지역: {gathering.location}</p>
          <p>이름: {gathering.name}</p>
          <p>타입: {gathering.type}</p>
          <p className="text-right">
            인원: {gathering.participantCount}/{gathering.capacity}
          </p>

          {gathering.image && (
            <div className="relative w-full h-[200px">
              <Image
                src={gathering.image}
                alt={gathering.name}
                fill
                className="object-cover"
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
