// // export interface GatheringsRequest {}
// export interface GatheringsResponse {
//   teamId: number;
//   id: number;
//   type: string;
//   name: string;
//   dateTime: string;
//   registrationEnd: string;
//   location: string;
//   participantCount: number;
//   capacity: number;
//   image: string;
//   createdBy: number;
//   canceledAt: string;
// }

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
