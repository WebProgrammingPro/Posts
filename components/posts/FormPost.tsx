import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputPostSchema, FormInputPostValues } from "@/schemas";

import { Post } from "@prisma/client";

import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import AudienceInputRow from "../prefabs/AudienceInputRow";

interface FormPostProps {
  onSubmit: SubmitHandler<FormInputPostValues>;
  isEditing?: boolean;
  initialValue?: Post;
}

const FormPost = ({ onSubmit, isEditing, initialValue }: FormPostProps) => {
  const form = useForm<FormInputPostValues>({
    resolver: zodResolver(FormInputPostSchema),
    defaultValues: {
      id: null,
      content: "",
      audience: "Public",
      ...initialValue,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4">
            <AudienceInputRow form={form} />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none"
                      placeholder="Post Content ..."
                      rows={4}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button className="select-none" disabled={!form.formState.isValid}>
            {!isEditing ? "Post" : "Update"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormPost;
