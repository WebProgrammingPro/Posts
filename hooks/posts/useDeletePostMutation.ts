import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deletePostAction } from "@/actions/deletePostAction";

export function useDeletePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePostAction,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["postsMove"] });
    },
  });

  return mutation;
}
