export interface Gathering {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt: string | null;
}
export type GatheringsResponse = Gathering[];

export interface GatheringsFilter {
  id?: number | number[];
  type?: string;
  location?: string;
  date?: string;
  createdBy?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  limit?: number;
  offset?: number;
}

export type GatheringType =
  | "DALLAEMFIT"
  | "OFFICE_STRETCHING"
  | "MINDFULNESS"
  | "WORKATION";

export const TABS = [
  { label: "전체", value: "ALL" },
  { label: "달램핏", value: "DALLAEMFIT" },
  { label: "오피스 스트레칭", value: "OFFICE_STRETCHING" },
  { label: "마인드풀니스", value: "MINDFULNESS" },
  { label: "워케이션", value: "WORKATION" },
] as const;
