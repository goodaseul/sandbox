export const gatheringsQueryKey = {
  all: ["gatherings"] as const,
  list: () => [...gatheringsQueryKey.all] as const,
};
