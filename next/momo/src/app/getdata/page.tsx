"use client";
import Image from "next/image";
import useGetData from "../hook/features/useGetData";
import { useJoinDataMutation } from "../hook/features/useJoinDataMutation";
import useGetJoinedData from "../hook/features/useGetJoinedData";
import { DataIdRequest } from "../api/types/data";
import { useCancelDataMutation } from "../hook/features/useCancelDataMutation";
import { usePutDataMuation } from "../hook/features/usePutDataMutation";

export default function GetDataPage() {
  const { data } = useGetData();
  const { data: joinedData } = useGetJoinedData();
  const { mutate: joinData, isPending: isJoinPending } = useJoinDataMutation();
  const { mutate: cancelData, isPending: isCancelPending } =
    useCancelDataMutation();
  const { mutate: removeData } = usePutDataMuation();

  const joinedIds = new Set(joinedData?.map((item) => item.id));

  const handleJoin = (payload: DataIdRequest) => {
    joinData({ id: Number(payload.id) });
  };
  const handleCancel = (payload: DataIdRequest) => {
    cancelData({ id: Number(payload.id) });
  };
  const handleRemove = (payload: DataIdRequest) => {
    removeData({ id: Number(payload.id) });
  };
  return (
    <>
      <h1>Get Data</h1>
      {data?.map((item) => {
        return (
          <div key={item.id} className="border">
            <button onClick={() => handleRemove({ id: item.id })}>
              모임 삭제하기
            </button>
            <p>{item.location}</p>
            <p>{item.name}</p>
            <Image
              width={100}
              height={100}
              src={item.image || "https://picsum.photos/300"}
              alt="이미지세여"
            />
            <p>{item.type}</p>
            <p>
              {item.participantCount} / {item.capacity}
            </p>
            <p>언제 놀거냐면요? {item.dateTime.slice(0, 10)}</p>
            <p>
              언제까지 신청해야하나면요 ? {item.registrationEnd.slice(0, 10)}
            </p>
            {joinedIds.has(item.id) ? (
              <button
                onClick={() => handleCancel({ id: item.id })}
                disabled={isCancelPending}
              >
                취소하기
              </button>
            ) : (
              <button
                onClick={() => handleJoin({ id: item.id })}
                disabled={isJoinPending}
              >
                참가하기
              </button>
            )}
          </div>
        );
      })}
    </>
  );
}
