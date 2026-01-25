"use client";

import useGatherings from "@/hooks/queries/gatherings/useGatherings";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Tab from "./_components.tsx/Tab";
import TabContent from "./_components.tsx/TabContent";
import Link from "next/link";
import { TABS, TabValue } from "@/app/(protected)/constatns";

export default function GatheringsPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("ALL");

  const serchParams = useSearchParams();
  const id = serchParams.get("id");
  const {
    data: gatherings,
    isLoading,
    error,
  } = useGatherings(id ? { id: Number(id) } : undefined);
  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;

  const handleTypeTab = (type: TabValue) => {
    setActiveTab(type);
  };
  const filteredGathergins =
    activeTab === TABS[0].value
      ? gatherings
      : gatherings?.filter((gathering) => gathering.type === activeTab);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">모임 목록</h1>
      <Link href="/gatherings/new">모임 만들기</Link>
      <Tab activeTab={activeTab} handleTypeTab={handleTypeTab} />
      <TabContent filteredGathergins={filteredGathergins} />
    </div>
  );
}
