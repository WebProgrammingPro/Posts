import { Post } from "@prisma/client";

import { Card, CardContent, CardHeader } from "../ui/card";

import HeaderPost from "./HeaderPost";
import IsReadMorePage from "../prefabs/page/IsReadMorePage";

interface PostCardProps {
  data?: Post;
}

const PostCard = ({ data }: PostCardProps) => {
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

  return (
    <div className="relative w-full mb-4 z-0">
      <div className="relative z-0">
        <Card>
          <CardHeader>
            <HeaderPost data={data} />
          </CardHeader>
          <CardContent>
            <div>
              <IsReadMorePage post={data} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostCard;
