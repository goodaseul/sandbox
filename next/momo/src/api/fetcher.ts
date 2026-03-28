export const fetcher = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_TEAM_ID}/${url}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    },
  );
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "API 요청 실패");
  }

  return res.json();
};
