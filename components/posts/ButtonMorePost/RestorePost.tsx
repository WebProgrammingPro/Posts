import { PostData } from "@/lib/types";

import { Redo2 } from "lucide-react";

import ConfirmationCard from "@/components/ConfirmationCard";

import { useRestorePostMutation } from "@/hooks/posts/useRestorePostMutation";

interface RestorePostProps {
  data: PostData;
}

const RestorePost = ({ data }: RestorePostProps) => {
  const mutation = useRestorePostMutation();

  const onClick = () => {
    mutation.mutate(data.id);
  };

  return (
    <ConfirmationCard
      title="Restore To Profile ?"
      description="Items you restore to your profile can be seen by the audience that was selected before they were moved to Recycle bin."
      icon={<Redo2 className="mr-2 h-4 w-4" />}
      label="Restore To Profile"
      button="Restore"
      onClick={onClick}
    />
  );
};

export default RestorePost;
