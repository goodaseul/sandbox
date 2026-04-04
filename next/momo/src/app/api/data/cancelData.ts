import { fetcher } from "../fetcher";
import { DataIdRequest } from "../types/data";

export const CancelData = ({ id }: DataIdRequest) => {
  return fetcher(`gatherings/${id}/leave`, {
    method: "DELETE",
  });
};
