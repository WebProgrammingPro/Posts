import axios from "@/lib/axios";

import { Post } from "@prisma/client";

export const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get("posts");

  return data;
};

export const fetchPostsTrash = async (): Promise<Post[]> => {
  const { data } = await axios.get("posts?isTrashed=true");

  return data;
};
