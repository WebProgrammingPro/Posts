import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPostAction } from "@/actions/CreatePostAction";

export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPostAction,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
