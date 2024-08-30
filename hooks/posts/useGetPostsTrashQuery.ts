import { useQuery } from "@tanstack/react-query";

import { Post } from "@prisma/client";

import { fetchPostsTrash } from "@/prisma/data/posts";

export default function useGetPostsTrashQuery() {
  const query = useQuery<Post[]>({
    queryKey: ["postsMove"],
    queryFn: fetchPostsTrash,
  });

  return query;
}
