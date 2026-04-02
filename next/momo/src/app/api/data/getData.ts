import { fetcher } from "../fetcher";
import { GetDataResponses } from "../types/data";

export default function GetData() {
  return fetcher<GetDataResponses[]>("gatherings?limit=100");
}
