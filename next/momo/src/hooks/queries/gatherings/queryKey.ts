import { GetMyGatheringsParams } from "@/src/api/types/gatherings";

export const queryKeys = {
  gatherings: {
    all: ["gatherings"] as const,
    my: (params: GetMyGatheringsParams) =>
      [...queryKeys.gatherings.all, "my", params] as const,
  },
};
