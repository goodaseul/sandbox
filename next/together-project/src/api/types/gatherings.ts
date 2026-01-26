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
  registrationEnd: string;
  capacity: number;
  image?: string;
};
