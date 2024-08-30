"use client";

import useGetPostsQuery from "@/hooks/posts/useGetPostsQuery";

import PostCard from "../PostCard";
import PostsLoadingSkeleton from "../PostsLoadingSkeleton";

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

  return data?.length
    ? data.map((post) => <PostCard key={post.id} data={post} />)
    : "Not Found";
};

export default ForYouFeed;
