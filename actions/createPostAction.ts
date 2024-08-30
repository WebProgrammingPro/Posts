import axios from "axios";

import { FormInputPostValues } from "@/schemas";

export const createPostAction = async (values: FormInputPostValues) => {
  const response = await axios.post("/api/posts", values);

  return response;
};
