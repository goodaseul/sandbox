"use client";

import { useState } from "react";
import { CategoryTabs } from "./_components/CategoryTabs";
import { FilterBar } from "./_components/FilterBar";
import { FloatingButton } from "../components/common/FloatingButton";
import { MeetupCard } from "./_components/MeetupCard";
import { useGatherings } from "../hooks/queries/gatherings";
import { SortBy } from "../prev/types/gatherings";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("dalramfit");
  const [activeType, setActiveType] = useState("all");
  const [sortBy, setSortBy] = useState<SortBy>("dateTime");

  const [location, setLocation] = useState("all");
  const [date, setDate] = useState("all");

  const { data: gatherings = [] } = useGatherings({
    sortBy: sortBy,
    sortOrder: "desc",
    limit: 10,
    offset: 0,
  });

  return (
    <>
      <section className="min-h-screen bg-background">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mt-6 sm:mt-8">
            <CategoryTabs
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <div className="mt-4 sm:mt-6">
            <FilterBar
              active={activeType}
              onChange={setActiveType}
              sortBy={sortBy}
              onSortChange={setSortBy}
              location={location}
              onLocationChange={setLocation}
              date={date}
              onDateChange={setDate}
            />
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {gatherings?.map((meetup) => (
              <MeetupCard key={meetup.id} {...meetup} />
            ))}
          </div>
        </main>
      </section>
      <FloatingButton />
    </>
  );
}
