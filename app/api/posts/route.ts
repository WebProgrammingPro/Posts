import { FormInputPostSchema } from "@/schemas";

import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const isTrashed = url.searchParams.get("isTrashed") === "true";

    const data = await db.post.findMany({
      where: {
        isTrashed,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Could Not Fetch Posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedFields = FormInputPostSchema.safeParse(body);
    if (!validatedFields.success)
      return Response.json({ message: "Invalid Fields" }, { status: 500 });

    const { audience, content } = validatedFields.data;

    const newPost = await db.post.create({
      data: { audience, content },
    });

    return Response.json(
      { message: "Created Post Successfully", newPost },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Could Not Create Post" }, { status: 500 });
  }
}
