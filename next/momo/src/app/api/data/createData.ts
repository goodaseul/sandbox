import { fetcherForm } from "../fetcherForm";
// import { CreateDataRequest } from "../types/data";

export default function createData(formData: FormData) {
  return fetcherForm("gatherings", {
    method: "POST",
    body: formData,
  });
}
