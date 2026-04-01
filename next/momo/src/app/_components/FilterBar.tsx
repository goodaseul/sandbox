"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { GatheringType, SortBy } from "@/src/types/gatherings";

interface FilterBarProps {
  active: string;
  onChange: (type: string) => void;
  sortBy: SortBy;
  onSortChange: (sort: SortBy) => void;
  location: string;
  onLocationChange: (location: string) => void;
  date: string;
  onDateChange: (date: string) => void;
}

const typeFilter: { id: GatheringType | "all"; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "OFFICE_STRETCHING", label: "오피스 스트레칭" },
  { id: "MINDFULNESS", label: "마인드풀니스" },
];

const sortOptions: { id: SortBy; label: string }[] = [
  { id: "dateTime", label: "마감 임박" },
  { id: "participantCount", label: "참여 인원 순" },
];

const locationOptions = [
  { id: "all", label: "지역 전체" },
  { id: "건대입구", label: "건대입구" },
  { id: "을지로3가", label: "을지로3가" },
  { id: "신림", label: "신림" },
  { id: "홍대입구", label: "홍대입구" },
];

const dateOptions = [
  { id: "all", label: "날짜 전체" },
  { id: "today", label: "오늘" },
  { id: "tomorrow", label: "내일" },
  { id: "this-week", label: "이번 주" },
];

export function FilterBar({
  active,
  onChange,
  sortBy,
  onSortChange,
  location,
  onLocationChange,
  date,
  onDateChange,
}: FilterBarProps) {
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const regionRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        regionRef.current &&
        !regionRef.current.contains(event.target as Node)
      ) {
        setShowRegionDropdown(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDateDropdown(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Type Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {typeFilter.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onChange(filter.id)}
              className={twMerge(
                "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                active === filter.id
                  ? "bg-foreground text-background"
                  : "bg-background border border-border text-foreground hover:bg-muted",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Secondary Filters */}
        <div className="flex items-center gap-2 sm:gap-4 text-sm">
          {/* Region Dropdown */}
          <div className="relative" ref={regionRef}>
            <button
              onClick={() => setShowRegionDropdown(!showRegionDropdown)}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>
                {locationOptions.find((o) => o.id === location)?.label ??
                  "지역 전체"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showRegionDropdown && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-10 min-w-[140px]">
                {locationOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      onLocationChange(option.id);
                      setShowRegionDropdown(false);
                    }}
                    className={twMerge(
                      "w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors",
                      location === option.id
                        ? "text-primary font-medium"
                        : "text-foreground",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Dropdown */}
          <div className="relative" ref={dateRef}>
            <button
              onClick={() => setShowDateDropdown(!showDateDropdown)}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>
                {dateOptions.find((o) => o.id === date)?.label ?? "날짜 전체"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showDateDropdown && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-10 min-w-[140px]">
                {dateOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      onDateChange(option.id);
                      setShowDateDropdown(false);
                    }}
                    className={twMerge(
                      "w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors",
                      date === option.id
                        ? "text-primary font-medium"
                        : "text-foreground",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">
                {sortOptions.find((o) => o.id === sortBy)?.label}
              </span>
            </button>

            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-10 min-w-[140px]">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      onSortChange(option.id);
                      setShowSortDropdown(false);
                    }}
                    className={twMerge(
                      "w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors",
                      sortBy === option.id
                        ? "text-primary font-medium"
                        : "text-foreground",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
