import axios from "@/lib/axios";

import { FormInputPostValues } from "@/schemas";

export const createPostAction = async (values: FormInputPostValues) => {
  const response = await axios.post("/posts", values);

  return response;
};
