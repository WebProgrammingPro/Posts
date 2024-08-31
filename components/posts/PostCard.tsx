import { useState } from "react";

import { Post } from "@prisma/client";

import { Card, CardContent, CardHeader } from "../ui/card";

import HeaderPost from "./HeaderPost";

interface PostCardProps {
  data?: Post;
}

const PostCard = ({ data }: PostCardProps) => {
  const [isReadMore, setIsReadMore] = useState(true);

  if (!data)
    return (
      <div className="relative w-full mb-4 z-0">
        <div className="relative z-0">
          <Card>
            <CardContent className="p-5">
              <div>
                <p className="break-all whitespace-pre-wrap">Not Found Post</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );

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
