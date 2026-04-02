import {
  GatheringsJoinedParams,
  GatheringsMyParams,
  GatheringsParams,
} from "@/src/api/types/gatherings";

export const queryKeys = {
  gatherings: {
    all: ["gatherings"] as const,
    list: (params: GatheringsParams) =>
      [...queryKeys.gatherings.all, "list", params] as const,
    my: (params: GatheringsMyParams) =>
      [...queryKeys.gatherings.all, "my", params] as const,
    joined: (params: GatheringsJoinedParams) =>
      [...queryKeys.gatherings.all, "joined", params] as const,
  },
};
