import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import db from "~/db/client";
import { users, type User } from "~/db/schema";

export default async function handler(req: Request, res: Response) {
  const result: User[] = await db
    .select()
    .from(users)
    .where(eq(users.id, req.params.userId));

  if (result.length === 0) {
    return res.status(404).send({
      success: false,
      error: { code: 100, message: "User not found" },
    });
  }

  return res.status(200).json({ success: true, data: result[0] });
}
