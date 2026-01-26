import { apiFetch } from "@/lib/api";
import { GatheringsRequest, GatheringsResponse } from "./types/gatherings";

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
