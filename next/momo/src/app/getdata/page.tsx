"use client";
import Image from "next/image";
import useGetData from "../hook/features/useGetData";

export default function GetDataPage() {
  const { data } = useGetData();
  console.log(data);
  return (
    <>
      <h1>Get Data</h1>
      {data?.map((item) => {
        {
          console.log(item.image);
        }

        return (
          <div key={item.id} className="grid grid-cols-2 gap-2 border">
            <p>{item.location}</p>
            <p>{item.name}</p>
            <Image
              width={20}
              height={20}
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
          </div>
        );
      })}
    </>
  );
}
