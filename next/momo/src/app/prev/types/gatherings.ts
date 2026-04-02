export type MeetupStatus = "upcoming" | "pending" | "confirmed" | "completed";
export type SortBy = "dateTime" | "registrationEnd" | "participantCount";
export type SortOrder = "asc" | "desc";
export type GatheringType = "DALLAEMFIT" | "OFFICE_STRETCHING" | "MINDFULNESS";
export type Category = "dalramfit" | "workation";

export const typeFilter: { id: GatheringType | "all"; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "OFFICE_STRETCHING", label: "오피스 스트레칭" },
  { id: "MINDFULNESS", label: "마인드풀니스" },
];

export const sortOptions: { id: SortBy; label: string }[] = [
  { id: "dateTime", label: "마감 임박" },
  { id: "participantCount", label: "참여 인원 순" },
];
export const locationOptions = [
  { id: "all", label: "지역 전체" },
  { id: "건대입구", label: "건대입구" },
  { id: "을지로3가", label: "을지로3가" },
  { id: "신림", label: "신림" },
  { id: "홍대입구입구", label: "홍대입구입구" },
];

export const dateOptions = [
  { id: "all", label: "날짜 전체" },
  { id: "today", label: "오늘" },
  { id: "tomorrow", label: "내일" },
  { id: "this-week", label: "이번 주" },
];
