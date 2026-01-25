// constants/gatherings.ts

export const LOCATIONS = ["건대입구", "을지로3가", "신림", "홍대입구"] as const;

export type Location = (typeof LOCATIONS)[number];

export const GATHERING_TYPES = [
  "DALLAEMFIT",
  "OFFICE_STRETCHING",
  "MINDFULNESS",
  "WORKATION",
] as const;

export type GatheringType = (typeof GATHERING_TYPES)[number];
