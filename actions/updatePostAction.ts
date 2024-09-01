import axios from "@/lib/axios";

import { FormInputPostValues } from "@/schemas";

export const updatePostAction = async (
  values: FormInputPostValues,
  postId: string
) => {
  const response = await axios.patch(`/posts/${postId}`, values);

  return response;
};
