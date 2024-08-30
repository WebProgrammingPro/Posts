import axios from "axios";

export const restorePostAction = async (postId: string) => {
  const response = await axios.patch(`/api/posts/${postId}/restoreTrash`);

  return response;
};
