import { useMutation, useQueryClient } from "@tanstack/react-query";

import axios from "@/lib/axios";

const restorePostApi = async (id: string) => {
  const response = await axios.patch(`/posts/${id}/restoreTrash`);

  return response;
};

export function useRestorePostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: restorePostApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["postsMove"] });
    },
  });

  return mutation;
}
