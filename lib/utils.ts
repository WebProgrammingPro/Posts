import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PostData } from "./types";

import { formatRelative } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeDate(post: PostData) {
  return formatRelative(new Date(post.createdAt), new Date());
}
