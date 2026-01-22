import { apiFetch } from "@/lib/api";
import { GatheringsResponse } from "./types/gatherings";

export function getGatherings() {
  return apiFetch<GatheringsResponse>("/gatherings");
}
