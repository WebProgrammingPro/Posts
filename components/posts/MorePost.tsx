import { PostData } from "@/lib/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Ellipsis } from "lucide-react";

import EditPost from "./ButtonMorePost/EditPost";
import MoveToTrashPost from "./ButtonMorePost/MoveToTrashPost";
import RestorePost from "./ButtonMorePost/RestorePost";
import DeletePost from "./ButtonMorePost/DeletePost";

interface MorePostProps {
  data: PostData;
}

const MorePost = ({ data }: MorePostProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center w-9 h-9 py-2 px-2 rounded-full cursor-pointer hover:bg-gray-200">
          <Ellipsis />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {!data.isTrashed && (
            <>
              <EditPost data={data} />
              <DropdownMenuSeparator />
            </>
          )}
          {data.isTrashed ? (
            <>
              <RestorePost data={data} />
              <DeletePost data={data} />
            </>
          ) : (
            <MoveToTrashPost data={data} />
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MorePost;
