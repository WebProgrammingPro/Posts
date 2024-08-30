import ForYouFeed from "@/components/posts/feeds/ForYouFeed";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="flex flex-col w-[500px]">
        <ForYouFeed />
      </div>
    </div>
  );
};

export default Page;
