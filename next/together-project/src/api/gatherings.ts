import { apiFetch } from "@/lib/api";
import {
  GatheringParticipantResponses,
  GatheringsJoinedResponses,
  GatheringsRequest,
  GatheringsResponse,
} from "./types/gatherings";

export async function getGatherings(): Promise<GatheringsResponse> {
  return apiFetch<GatheringsResponse>("/gatherings");
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", file);

  const res = await apiFetch<{ url: string }>("/images", {
    method: "POST",
    body: formData,
  });

  return res.url;
}
export function createGatherings(data: GatheringsRequest) {
  return apiFetch<GatheringsResponse>("/gatherings", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
export async function getGatheringsJoined(): Promise<GatheringsJoinedResponses> {
  return apiFetch<GatheringsJoinedResponses>("/gatherings/joined");
}
export async function getGatheringsMadeMe(): Promise<GatheringsResponse> {
  return apiFetch<GatheringsResponse>("/gatherings/my");
}
export async function getGatheringsParticipants(
  id: number,
  options?: {
    limit?: number;
    offset?: number;
    sortOrder?: "asc" | "desc";
  },
): Promise<GatheringParticipantResponses> {
  const { limit = 5, offset = 0, sortOrder = "asc" } = options ?? {};

  const query = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    sortOrder,
  }).toString();

  return apiFetch(`/gatherings/${id}/participants?${query}`);
}
