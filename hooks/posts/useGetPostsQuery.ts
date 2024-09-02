import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { Post } from "@prisma/client";

const fetchPosts = async () => {
  const response = await axios.get<Post[]>("/posts");

  return response.data;
};

export default function useGetPostsQuery() {
  const query = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return query;
}
