import { GatheringType, Location } from "@/constants/gatherings";

export interface Gathering {
  teamId: number;
  id: number;
  type: GatheringType;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: Location;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt: string | null;
}
export type GatheringsResponse = Gathering[];

export type GatheringsRequest = {
  location: Location;
  type: GatheringType;
  name: string;
  dateTime: string;
  capacity: number;
  image: File | null;
  registrationEnd?: string;
};

export interface GatheringsFilter {
  id?: number | number[];
  type?: GatheringType;
  location?: Location;
  date?: string;
  createdBy?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  limit?: number;
  offset?: number;
}
