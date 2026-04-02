import { useQuery } from "@tanstack/react-query";
import { getGatheringsMy } from "@/src/api/gatherings/gatheringsMy";
import { queryKeys } from "./queryKey";

export const useGatheringsMy = () => {
  const params = {
    sortBy: "dateTime" as const,
    sortOrder: "desc" as const,
    limit: 10,
    offset: 0,
  };

  return useQuery({
    queryKey: queryKeys.gatherings.my(params),
    queryFn: () => getGatheringsMy(params),
  });
};
