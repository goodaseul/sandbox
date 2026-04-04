import { fetcher } from "../fetcher";
import { GetJoinedDataResponses } from "../types/data";

export const GetJoinedData = () => {
  return fetcher<GetJoinedDataResponses[]>("gatherings/joined");
};
