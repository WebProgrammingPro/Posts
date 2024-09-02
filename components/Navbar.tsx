"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

import CreatePost from "./posts/CreatePost";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-neutral-100 py-4">
      <div className="flex container">
        <div className="flex-1">
          <Link href={"/"}>Posts</Link>
        </div>
        <div className="flex gap-2 flex-none">
          <Link href={"/"}>
            <Button className="px-0" variant={"link"} size={"sm"}>
              Home
            </Button>
          </Link>
          <Separator orientation="vertical" />
          <Link href={"/recycleBin"}>
            <Button className="px-0" variant={"link"} size={"sm"}>
              Recycle Bin
            </Button>
          </Link>
          {pathname === "/" && (
            <>
              <Separator orientation="vertical" />
              <CreatePost />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
