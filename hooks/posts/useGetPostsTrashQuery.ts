import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/axios";

import { Post } from "@prisma/client";

const fetchPostsTrash = async () => {
  const response = await axios.get<Post[]>("/posts?isTrashed=true");

  return response.data;
};

export default function useGetPostsTrashQuery() {
  const query = useQuery<Post[]>({
    queryKey: ["postsMove"],
    queryFn: fetchPostsTrash,
  });

  return query;
}
