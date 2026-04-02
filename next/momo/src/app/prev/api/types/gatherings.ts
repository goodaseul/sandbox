import { SortBy, SortOrder } from "@/src/app/prev/types/gatherings";

type BaseGathering = {
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
};
type BaseParams = {
  sortBy?: SortBy;
  sortOrder?: SortOrder;
  limit?: number;
  offset?: number;
};

export type GatheringsResponse = BaseGathering[];

export interface GatheringsParams extends BaseParams {
  id?: number;
  type?: string;
  location?: string;
  date?: string;
  createdBy?: string;
}
export type GatheringsMyResponse = BaseGathering;

export type GatheringsMyParams = BaseParams;

export type GatheringsJoinedResponse = BaseGathering & {
  joinAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
};

export interface GatheringsJoinedParams extends BaseParams {
  completed?: boolean;
  reviewed?: boolean;
}
