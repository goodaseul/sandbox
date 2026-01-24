import { GatheringsResponse } from "@/api/gatherings";
import Image from "next/image";

export default function TabContent({
  filteredGathergins,
}: {
  filteredGathergins: GatheringsResponse | undefined;
}) {
  return (
    <ul className="flex">
      {filteredGathergins?.map((gathering) => (
        <li key={gathering.id}>
          <div className="relative w-full h-[200px">
            <Image
              src={gathering.image}
              alt={gathering.name}
              fill
              className="object-cover"
            />
          </div>
          <p>{gathering.id}</p>
          <p>{gathering.location}</p>
          <p>{gathering.type}</p>
          <p>
            {gathering.participantCount}/{gathering.capacity}
          </p>
        </li>
      ))}
    </ul>
  );
}
