import { Post } from "@prisma/client";

import { formatRelativeDate } from "@/lib/utils";

import MorePost from "./MorePost";
import { Badge } from "../ui/badge";

interface HeaderPostProps {
  data: Post;
}

const HeaderPost = ({ data }: HeaderPostProps) => {
  return (
    <div className="flex flex-row justify-between items-center pb-2 border-b">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 font-semibold">
          <Badge>{data.audience}</Badge>
          <div className="text-xs text-muted-foreground font-normal">
            {formatRelativeDate(data)}
          </div>
        </div>
      </div>
      <MorePost data={data} />
    </div>
  );
};

export default HeaderPost;
