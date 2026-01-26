"use client";

import useGatherings from "@/hooks/queries/gatherings/useGatherings";
import { useState } from "react";
import Tab from "./_components.tsx/Tab";
import TabContent from "./_components.tsx/TabContent";
import Link from "next/link";
import { TabValue } from "@/constants/gatherings";

export default function GatheringsPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("ALL");

  const { data: gatherings, isLoading, error } = useGatherings();

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;

  const filteredGatherings =
    activeTab === "ALL"
      ? gatherings
      : gatherings?.filter((gathering) => gathering.type === activeTab);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">모임 목록</h1>

      <Link href="/gatherings/new">모임 만들기</Link>

      <Tab activeTab={activeTab} handleTypeTab={setActiveTab} />

      <TabContent filteredGathergins={filteredGatherings} />
    </div>
  );
}
