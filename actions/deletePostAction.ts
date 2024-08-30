import axios from "axios";

export const deletePostAction = async (postId: string) => {
  const response = await axios.delete(`/api/posts/${postId}`);

  return response;
};
