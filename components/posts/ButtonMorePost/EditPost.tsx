"use client";

import { useState } from "react";

import { Post } from "@prisma/client";

import { FormInputPostValues } from "@/schemas";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { Pencil } from "lucide-react";

import FormPost from "../FormPost";

import { useEditPostMutation } from "@/hooks/posts/useEditPostMutation";

interface EditPostProps {
  data: Post;
}

const EditPost = ({ data }: EditPostProps) => {
  const mutation = useEditPostMutation();

  const [open, setOpen] = useState(false);

  const handleEditPost = (values: FormInputPostValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DialogTrigger className="w-full">
          <DropdownMenuItem className="cursor-pointer">
            <Pencil className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
        </DialogTrigger>
      </DropdownMenu>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Edit The Post And Enjoy Your Posts With Friends.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <FormPost
            onSubmit={handleEditPost}
            isEditing={true}
            initialValue={data}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPost;
