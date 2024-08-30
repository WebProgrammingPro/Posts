import axios from "axios";

import { FormInputPostValues } from "@/schemas";

export const editPostAction = async (values: FormInputPostValues) => {
  const response = await axios.patch(`/api/posts/${values.id}`, values);

  return response;
};
