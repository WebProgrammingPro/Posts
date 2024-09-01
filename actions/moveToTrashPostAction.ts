import axios from "@/lib/axios";

export const moveToTrashPostAction = async (postId: string) => {
  const response = await axios.patch(`/posts/${postId}/moveToTrash`);

  return response;
};
