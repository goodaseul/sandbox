import { fetcher } from "../fetcher";
import {
  GatheringsJoinedParams,
  GatheringsJoinedResponse,
} from "../types/gatherings";

export const getGatheringsJoined = (params: GatheringsJoinedParams) => {
  const query = new URLSearchParams({
    sortBy: params.sortBy ?? "dateTime",
    sortOrder: params.sortOrder ?? "desc",
    limit: String(params.limit ?? 10),
    offset: String(params.offset ?? 0),
    reviewed: String(params.reviewed),
    completed: String(params.completed),
  });

  return fetcher<GatheringsJoinedResponse[]>(`gatherings/joined?${query}`);
};
