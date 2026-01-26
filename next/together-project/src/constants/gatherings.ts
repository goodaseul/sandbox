export const LOCATIONS = ["건대입구", "을지로3가", "신림", "홍대입구"] as const;

export type Location = (typeof LOCATIONS)[number];

export const GATHERING_TYPES = [
  "DALLAEMFIT",
  "OFFICE_STRETCHING",
  "MINDFULNESS",
  "WORKATION",
] as const;

export type GatheringType = (typeof GATHERING_TYPES)[number];

export type TabValue = "ALL" | GatheringType;

export const TABS: readonly { label: string; value: TabValue }[] = [
  { label: "전체", value: "ALL" },
  { label: "달램핏", value: "DALLAEMFIT" },
  { label: "오피스 스트레칭", value: "OFFICE_STRETCHING" },
  { label: "마인드풀니스", value: "MINDFULNESS" },
  { label: "워케이션", value: "WORKATION" },
];
