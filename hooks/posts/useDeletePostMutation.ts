import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "@/lib/axios";

const deletePostApi = async (id: string) => {
  const response = await axios.delete(`/posts/${id}`);

  return response;
};

export function useDeletePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePostApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["postsMove"] });
    },
  });

  return mutation;
}
