export interface GatheringsMyResponse {
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

export interface GetMyGatheringsParams {
  sortBy?: "dateTime" | "registrationEnd" | "participantCount";
  sortOrder?: "asc" | "desc";
  limit?: number;
  offset?: number;
}
