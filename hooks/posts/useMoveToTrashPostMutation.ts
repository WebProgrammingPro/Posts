import { useMutation, useQueryClient } from "@tanstack/react-query";

import { moveToTrashPostAction } from "@/actions/moveToTrashPostAction";

export function useMoveToTrashPostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: moveToTrashPostAction,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return mutation;
}
