export async function fetcherForm(url: string, options: RequestInit) {
  const token = localStorage.getItem("accessToken");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_TEAM_ID}/${url}`,
    {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...(options.body instanceof FormData
          ? {}
          : { "Content-Type": "application/json" }),
      },
    },
  );

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    console.error("❌ API Error:", res.status, errorBody);
    throw new Error(errorBody?.message ?? `HTTP ${res.status}`);
  }

  return res.json();
}
