"use client";
import {
  GatheringsJoinedResponses,
  GatheringsResponse,
} from "@/api/types/gatherings";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Card({
  gatheringSource,
}: {
  gatheringSource: GatheringsResponse | GatheringsJoinedResponses | undefined;
}) {
  const router = useRouter();

  const handleDetail = (id: number) => {
    router.push(`/gatherings/${id}`);
  };
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {gatheringSource?.map((gathering) => (
        <li
          key={gathering.id}
          className="border border-point rounded-md p-4"
          onClick={() => handleDetail(gathering.id)}
        >
          <p>지역: {gathering.location}</p>
          <p>이름: {gathering.name}</p>
          <p>타입: {gathering.type}</p>
          <p className="text-right">
            인원: {gathering.participantCount}/{gathering.capacity}
          </p>
          <p>모임일자 : {gathering.dateTime.split("T")[0]}</p>
          <p>마감일: {gathering.registrationEnd.split("T")[0]}</p>
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
          <Button
            className="bg-point rounded-md p-2 mt-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("참여");
            }}
          >
            참여하기
          </Button>
        </li>
      ))}
    </ul>
  );
}
