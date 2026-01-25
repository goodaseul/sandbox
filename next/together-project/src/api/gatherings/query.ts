import { apiFetch } from "@/lib/api";
import { buildGatheringsQuery } from ".";
import {
  GatheringsFilter,
  GatheringsRequest,
  GatheringsResponse,
} from "./types";

export async function getGatherings(
  filters?: GatheringsFilter,
): Promise<GatheringsResponse> {
  const query = buildGatheringsQuery(filters);
  const url = query ? `/gatherings?${query}` : `/gatherings`;

  return apiFetch<GatheringsResponse>(url);
}

export function createGatherings(data: GatheringsRequest) {
  return apiFetch<GatheringsResponse>("/gatherings", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
