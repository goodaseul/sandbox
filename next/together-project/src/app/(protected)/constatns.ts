export const TABS = [
  { label: "전체", value: "ALL" },
  { label: "달램핏", value: "DALLAEMFIT" },
  { label: "오피스 스트레칭", value: "OFFICE_STRETCHING" },
  { label: "마인드풀니스", value: "MINDFULNESS" },
  { label: "워케이션", value: "WORKATION" },
] as const;

export type TabValue = (typeof TABS)[number]["value"];
