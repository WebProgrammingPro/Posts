import axios from "@/lib/axios";

export const restorePostAction = async (postId: string) => {
  const response = await axios.patch(`/posts/${postId}/restoreTrash`);

  return response;
};
