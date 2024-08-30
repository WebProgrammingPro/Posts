import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputPostSchema, FormInputPostValues } from "@/schemas";

import { PostData } from "@/lib/types";
import { Audience } from "@prisma/client";

import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface FormPostProps {
  onSubmit: SubmitHandler<FormInputPostValues>;
  isEditing?: boolean;
  initialValue?: PostData;
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
            <FormField
              control={form.control}
              name="audience"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value={Audience.Public}>
                      {Audience.Public}
                    </SelectItem>
                    <SelectItem value={Audience.Friends}>
                      {Audience.Friends}
                    </SelectItem>
                    <SelectItem value={Audience.Only}>
                      {Audience.Only}
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
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
