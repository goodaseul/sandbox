import { fetcher } from "../fetcher";
import { DataIdRequest } from "../types/data";

export const JoinData = ({ id }: DataIdRequest) => {
  return fetcher(`gatherings/${id}/join`, {
    method: "POST",
  });
};
