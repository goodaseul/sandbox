// 서버에서 다른 API를 치면
// queryKey도 무조건 달라야 한다
// | API                  | queryKey                        |
// | -------------------- | ------------------------------- |
// | `/gatherings`        | `["gatherings", "list"]`        |
// | `/gatherings/joined` | `["gatherings", "joined"]`      |
// | `/gatherings/123`    | `["gatherings", "detail", 123]` |

export const gatheringsQueryKey = {
  all: ["gatherings"] as const,
  list: () => [...gatheringsQueryKey.all, "list"] as const,
  joined: () => [...gatheringsQueryKey.all, "joined"] as const,
  me: () => [...gatheringsQueryKey.all, "me"] as const,
  participants: (id: number, offset: number) =>
    [...gatheringsQueryKey.all, "participants"] as const,

  //   detail: (id: number) => ["gatherings", "detail", id] as const,
};
