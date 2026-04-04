import { fetcherForm } from "../fetcherForm";

export default function createData(formData: FormData) {
  return fetcherForm("gatherings", {
    method: "POST",
    body: formData,
  });
}
