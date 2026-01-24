import { GatheringsFilter } from "./types";

export function buildGatheringsQuery(filters?: GatheringsFilter): string {
  if (!filters) return "";

  const params = new URLSearchParams();

  if (filters.id) {
    if (Array.isArray(filters.id)) {
      params.append("id", filters.id.join(","));
    } else {
      params.append("id", String(filters.id));
    }
  }
  if (filters.type) params.append("type", filters.type);
  if (filters.location) params.append("location", filters.location);
  if (filters.date) params.append("date", filters.date);
  if (filters.createdBy) params.append("createdBy", String(filters.createdBy));
  if (filters.sortBy) params.append("sortBy", filters.sortBy);
  if (filters.sortOrder) params.append("sortOrder", filters.sortOrder);
  if (filters.limit !== undefined)
    params.append("limit", String(filters.limit));
  if (filters.offset !== undefined)
    params.append("offset", String(filters.offset));

  return params.toString();
}
