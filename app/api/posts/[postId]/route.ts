import { db } from "@/lib/db";

import { FormInputPostSchema } from "@/schemas";

interface contextProps {
  params: {
    postId: string;
  };
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { postId } = context.params;
    const body = await req.json();

    if (!postId)
      return Response.json({ message: "Not Post ID" }, { status: 500 });

    const validatedFields = FormInputPostSchema.safeParse(body);
    if (!validatedFields.success)
      return Response.json({ message: "Invalid Fields" }, { status: 500 });

    const { audience, content } = validatedFields.data;

    const editedPost = await db.post.update({
      where: { id: postId },
      data: {
        audience,
        content,
        updatedAt: new Date(),
      },
    });

    return Response.json(
      { message: "Updated Post Successfully", post: editedPost },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Could Not Update Post ID" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, context: contextProps) {
  try {
    const { postId } = context.params;

    if (!postId)
      return Response.json({ message: "Not Post ID" }, { status: 500 });

    const deletedPost = await db.post.delete({ where: { id: postId } });

    return Response.json(
      { message: "Delete Post Successfully", post: deletedPost },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Could Not Delete Post ID" },
      { status: 500 }
    );
  }
}
