"use client";

import { Pencil } from "lucide-react";
import { MeetupCard } from "./_components/MeetupCard";
import { ProfileCard } from "./_components/ProfileCard";
import { TabNav } from "./_components/TabNav";
import Notice from "@/src/components/common/Notice";
import {
  useGatheringsJoined,
  useGatheringsMy,
} from "@/src/hooks/queries/gatherings";
import Title from "@/src/components/common/Title";
import { useUser } from "@/src/hooks/queries/auth";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/src/components/common/Button";

const tabs = [
  { id: "meetups", label: "나의 모임" },
  { id: "reviews", label: "나의 리뷰" },
  { id: "my-meetups", label: "내가 만든 모임" },
];

export default function MypagePage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "meetups";
  const router = useRouter();

  const handleChange = (tab: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tab);
    router.push(`?${params}`);
  };

  const { data: user } = useUser();
  const { data: myMeetups = [] } = useGatheringsMy();
  const { data: joinedMeetups = [] } = useGatheringsJoined();

  const imageSrc =
    user?.image && user.image.startsWith("http")
      ? user.image
      : "/layout/default-profile.png";

  if (!user) return null;
  return (
    <main className="py-6 lg:py-10 px-4">
      <section className="w-full max-w-7xl mx-auto rounded-2xl lg:rounded-3xl shadow-sm bg-background p-4 lg:p-6">
        <Title variant="white">마이페이지</Title>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4 lg:gap-6">
          <div className="rounded-xl border-border p-4 lg:p-5 h-fit">
            <button className="block ml-auto w-8 h-8 lg:w-10 lg:h-10">
              <Pencil className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>

            <div className="mt-2 lg:mt-4">
              <ProfileCard
                name={user?.name}
                company={user?.companyName}
                email={user?.email}
                avatarUrl={imageSrc}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <TabNav
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleChange}
            />

            <div className="space-y-3 lg:space-y-4">
              {activeTab === "meetups" &&
                (joinedMeetups.length > 0 ? (
                  joinedMeetups.map((meetup) => (
                    <MeetupCard
                      key={meetup.id}
                      title={meetup.name}
                      imageUrl={meetup.image}
                      currentParticipants={meetup.participantCount}
                      maxParticipants={meetup.capacity}
                      location={meetup.location}
                      date={meetup.dateTime.slice(0, 10)}
                      time={meetup.dateTime.slice(11, 16)}
                      isCompleted={meetup.isCompleted}
                    />
                  ))
                ) : (
                  <Notice variant="center">나의 모임이 없습니다.</Notice>
                ))}
              {activeTab === "reviews" && (
                <>
                  <div className="flex gap-2">
                    <Button>작성 가능한 리뷰</Button>
                    <Button variant="outline">작성한 리뷰</Button>
                  </div>

                  {joinedMeetups?.length > 0 ? (
                    joinedMeetups.map((meetup) => (
                      <MeetupCard
                        key={meetup.id}
                        title={meetup.name}
                        imageUrl={meetup.image}
                        currentParticipants={meetup.participantCount}
                        maxParticipants={meetup.capacity}
                        location={meetup.location}
                        date={meetup.dateTime.slice(0, 10)}
                        time={meetup.dateTime.slice(11, 16)}
                        isCompleted={meetup.isCompleted}
                      />
                    ))
                  ) : (
                    <Notice variant="center">작성한 리뷰가 없습니다.</Notice>
                  )}
                </>
              )}

              {activeTab === "my-meetups" &&
                (myMeetups.length > 0 ? (
                  myMeetups.map((meetup) => (
                    <MeetupCard
                      key={meetup.id}
                      title={meetup.name}
                      imageUrl={meetup.image}
                      currentParticipants={meetup.participantCount}
                      maxParticipants={meetup.capacity}
                      location={meetup.location}
                      date={meetup.dateTime.slice(0, 10)}
                      time={meetup.dateTime.slice(11, 16)}
                    />
                  ))
                ) : (
                  <Notice variant="center">내가 만든 모임이 없습니다.</Notice>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
