import { fetcher } from "../fetcher";
import { DataIdRequest } from "../types/data";

export const PutData = ({ id }: DataIdRequest) => {
  return fetcher(`gatherings/${id}/cancel`, {
    method: "PUT",
  });
};
