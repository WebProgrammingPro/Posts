import { useDeletePostMutation } from "@/hooks/posts/useDeletePostMutation";

import { PostData } from "@/lib/types";

import { Trash2 } from "lucide-react";

import ConfirmationCard from "@/components/ConfirmationCard";

interface DeletePostProps {
  data: PostData;
}

const DeletePost = ({ data }: DeletePostProps) => {
  const mutation = useDeletePostMutation();

  const onClick = () => {
    mutation.mutate(data.id);
  };

  return (
    <ConfirmationCard
      title="Delete ?"
      description="Items you delete can't be restored."
      icon={<Trash2 className="mr-2 h-4 w-4" />}
      label="Delete"
      button="Delete"
      onClick={onClick}
    />
  );
};

export default DeletePost;
