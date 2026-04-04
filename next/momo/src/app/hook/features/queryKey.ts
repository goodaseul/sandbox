import { GetJoinDataRequest } from "../../api/types/data";

const dataAll = ["gatherings"] as const;

export const queryKeys = {
  data: {
    all: dataAll,
    joined: [...dataAll, "joined"] as const,

    lists: () => [...dataAll, "lists"] as const,
    list: (params: GetJoinDataRequest) => [...dataAll, "list", params] as const,
  },
};
