export interface GetDataResponses {
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
  canceledAt: string;
}

export interface CreateDataRequest {
  location: string;
  type: string;
  name: string;
  dateTime: string;
  capacity: number;
  image: string;
  registrationEnd: string;
}

export interface DataIdRequest {
  id: number;
}

export interface GetJoinedDataResponses {
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
  canceledAt: string;
  joinedAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
}
