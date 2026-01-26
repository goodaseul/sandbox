const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TEAM_ID = process.env.NEXT_PUBLIC_TEAM_ID;

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers: HeadersInit = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers as Record<string, string>),
  };

  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${BASE_URL}/${TEAM_ID}${url}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    throw new Error("UNAUTHORIZED");
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message || "API_ERROR");
  }

  return res.json();
}
