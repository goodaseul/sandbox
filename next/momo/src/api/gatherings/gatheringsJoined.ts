import { fetcher } from "../fetcher";
import {
  GetGatheringsJoinedParams,
  GetGatheringsJoinedResponse,
} from "../types/gatherings";

export const getGatheringsJoined = (params: GetGatheringsJoinedParams) => {
  const query = new URLSearchParams({
    sortBy: params.sortBy ?? "dateTime",
    sortOrder: params.sortOrder ?? "desc",
    limit: String(params.limit ?? 10),
    offset: String(params.offset ?? 0),
    reviewed: String(params.reviewed),
    completed: String(params.completed),
  });

  return fetcher<GetGatheringsJoinedResponse[]>(`gatherings/joined?${query}`);
};
