import { FormControl, FormField, FormItem } from "../ui/form";
import { Textarea } from "../ui/textarea";

interface ContentTextareaRowProps {
  form: any;
}

const ContentTextareaRow = ({ form }: ContentTextareaRowProps) => {
  return (
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
  );
};

export default ContentTextareaRow;
