import {
  GetGatheringsJoinedParams,
  GetGatheringsMyParams,
} from "@/src/api/types/gatherings";

export const queryKeys = {
  gatherings: {
    all: ["gatherings"] as const,
    my: (params: GetGatheringsMyParams) =>
      [...queryKeys.gatherings.all, "my", params] as const,
    joined: (params: GetGatheringsJoinedParams) =>
      [...queryKeys.gatherings.all, "joined", params] as const,
  },
};
