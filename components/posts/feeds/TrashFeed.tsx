"use client";

import PostsLoadingSkeleton from "../PostsLoadingSkeleton";

import PostCard from "../PostCard";

import useGetPostsTrashQuery from "@/hooks/posts/useGetPostsTrashQuery";
import NotFoundPost from "./NotFoundPost";

const TrashFeed = () => {
  const { data, isLoading } = useGetPostsTrashQuery();

  if (isLoading)
    return (
      <div className="flex flex-col items-center gap-4 mt-10">
        <div className="flex flex-col w-[500px]">
          <div className="space-y-5">
            <PostsLoadingSkeleton />
            <PostsLoadingSkeleton />
            <PostsLoadingSkeleton />
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="flex flex-col w-[500px]">
        {data?.length ? (
          data.map((post) => <PostCard key={post.id} data={post} />)
        ) : (
          <NotFoundPost />
        )}
      </div>
    </div>
  );
};

export default TrashFeed;
