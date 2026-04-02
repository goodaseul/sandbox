import { fetcher } from "../fetcher";
import { GatheringsMyResponse, GatheringsMyParams } from "../types/gatherings";

export const getGatheringsMy = (params: GatheringsMyParams) => {
  const query = new URLSearchParams({
    sortBy: params.sortBy ?? "dateTime",
    sortOrder: params.sortOrder ?? "desc",
    limit: String(params.limit ?? 10),
    offset: String(params.offset ?? 0),
  });

  return fetcher<GatheringsMyResponse[]>(`gatherings/my?${query}`);
};
