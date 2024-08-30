import axios from "axios";

import { FormInputPostValues } from "@/schemas";

export const updatePostAction = async (
  values: FormInputPostValues,
  postId: string
) => {
  const response = await axios.patch(`/api/posts/${postId}`, values);

  return response;
};
