import Link from "next/link";

import { PostData } from "@/lib/types";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import HeaderPost from "./HeaderPost";
import { useState } from "react";
import { Button } from "../ui/button";

interface PostCardProps {
  data: PostData;
}

const PostCard = ({ data }: PostCardProps) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const maxLength = 100;

  const displayContent = isReadMore
    ? data.content.slice(0, maxLength)
    : data.content;

  return (
    <div className="relative w-full mb-4 z-0">
      <div className="relative z-0">
        <Card>
          <CardHeader>
            <HeaderPost data={data} />
          </CardHeader>
          <CardContent>
            <div>
              <p
                onClick={toggleReadMore}
                className="break-all whitespace-pre-wrap"
              >
                {displayContent}
                {data.content.length > maxLength && isReadMore && "..."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostCard;
