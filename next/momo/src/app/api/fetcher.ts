export const fetcher = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const token = localStorage.getItem("accessToken");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_TEAM_ID}/${url}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options?.headers,
      },
    },
  );

  if (!res.ok) {
    const error = await res.json();
    if (res.status === 401) window.location.href = "/";
    throw new Error(error.message || "API 요청 실패");
  }

  return res.json();
};
