"use client";

import useGetPostsQuery from "@/hooks/posts/useGetPostsQuery";

import PostCard from "../PostCard";
import PostsLoadingSkeleton from "../PostsLoadingSkeleton";
import NotFoundPost from "./NotFoundPost";

const ForYouFeed = () => {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading)
    return (
      <div className="space-y-5">
        <PostsLoadingSkeleton />
        <PostsLoadingSkeleton />
        <PostsLoadingSkeleton />
      </div>
    );

  return data?.length ? (
    data.map((post) => <PostCard key={post.id} data={post} />)
  ) : (
    <NotFoundPost />
  );
};

export default ForYouFeed;
