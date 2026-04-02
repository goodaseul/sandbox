import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKey";
import { getGatheringsJoined } from "@/src/api/gatherings/gatheringsJoined";

export const useGatheringsJoined = () => {
  const params = {
    sortBy: "dateTime" as const,
    sortOrder: "desc" as const,
    limit: 10,
    offset: 0,
    reviewed: false,
    completed: false,
  };
  return useQuery({
    queryKey: queryKeys.gatherings.joined(params),
    queryFn: () => getGatheringsJoined(params),
  });
};
