const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TEAM_ID = process.env.NEXT_PUBLIC_TEAM_ID;

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${BASE_URL}/${TEAM_ID}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API ERROR: ${res.status}`);
  }
  console.log("REQUEST URL:", `${BASE_URL}`);
  console.log("REQUEST BODY:", options.body);

  return res.json();
}
