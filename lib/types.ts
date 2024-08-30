export interface PostData {
  id: string;
  audience: "Public" | "Friends" | "Only";
  content: string;

  isTrashed: boolean;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
