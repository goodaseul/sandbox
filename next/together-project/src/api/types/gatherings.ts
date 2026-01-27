// interface = 구조 설계도
// type = 타입 조합용 별명

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
export interface GatheringJoined {
  teamId: number;
  id: number;
  type: GatheringType;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: Location;
  participantCount: number;
  capacity: number;
  image?: string;
  createdBy: number;
  canceledAt: string;
  joinedAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
}
export type GatheringsJoinedResponses = GatheringJoined[];

export interface GatherginParticipant {
  teamId: number;
  userId: number;
  gatheringId: number;
  joinedAt: string;
  User: {
    id: number;
    email: string;
    name: string;
    companyName: string;
    image: string;
  };
}
export type GatheringParticipantResponses = GatherginParticipant[];
