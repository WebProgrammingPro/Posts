import { useMutation, useQueryClient } from "@tanstack/react-query";

import { restorePostAction } from "@/actions/restorePostAction";

export function useRestorePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: restorePostAction,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["postsMove"] });
    },
  });

  return mutation;
}
