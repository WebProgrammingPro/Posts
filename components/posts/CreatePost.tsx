"use client";

import { useState } from "react";

import { useCreatePostMutation } from "@/hooks/posts/useCreatePostMutation";
import { FormInputPostValues } from "@/schemas";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

import FormPost from "./FormPost";

const CreatePost = () => {
  const mutation = useCreatePostMutation();

  const [open, setOpen] = useState(false);

  const handleCreatePost = (values: FormInputPostValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-0" variant={"link"} size={"sm"}>
          Created Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>New Post</DialogTitle>
          <DialogDescription>
            Share The Post And Enjoy Your Posts With Friends.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <FormPost onSubmit={handleCreatePost} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
