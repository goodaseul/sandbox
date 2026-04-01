import { fetcher } from "../fetcher";
import { GatheringsParams, GatheringsResponse } from "../types/gatherings";

export const getGatherings = (params: GatheringsParams) => {
  const query = new URLSearchParams();
  if (params.id !== undefined) query.set("id", String(params.id));
  if (params.type) query.set("type", params.type);
  if (params.location) query.set("location", params.location);
  if (params.date) query.set("date", params.date);
  if (params.createdBy) query.set("createdBy", params.createdBy);

  query.set("sortBy", params.sortBy ?? "dateTime");
  query.set("sortOrder", params.sortOrder ?? "desc");
  query.set("limit", String(params.limit ?? 10));
  query.set("offset", String(params.offset ?? 0));

  return fetcher<GatheringsResponse>(`gatherings?${query}`);
};
