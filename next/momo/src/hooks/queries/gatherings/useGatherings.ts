import { getGatherings } from "@/src/api/gatherings/gatherings";
import { queryKeys } from "./queryKey";
import { useQuery } from "@tanstack/react-query";
import { GatheringsParams } from "@/src/api/types/gatherings";

export const useGatherings = (params: GatheringsParams) => {
  return useQuery({
    queryKey: queryKeys.gatherings.list(params),
    queryFn: () => getGatherings(params),
  });
};
