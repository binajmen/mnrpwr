import type { Request, Response } from "express";
import db from "../../db/client";
import { users, type User } from "../../db/schema";

export default async function handler(req: Request, res: Response) {
  const result: User[] = await db.select().from(users);

  res.status(200).json({ success: true, data: result });
}
