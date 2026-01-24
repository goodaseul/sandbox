import { GatheringsFilter } from "@/api/gatherings/types";

export const gatheringsQueryKey = {
  all: ["gatherings"] as const,
  list: (filters?: GatheringsFilter) =>
    [...gatheringsQueryKey.all, filters] as const,
};
