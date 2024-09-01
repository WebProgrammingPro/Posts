import axios from "@/lib/axios";

export const deletePostAction = async (postId: string) => {
  const response = await axios.delete(`/posts/${postId}`);

  return response;
};
