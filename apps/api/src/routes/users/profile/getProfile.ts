import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import db from "../../../db/client";
import { profiles, type Profile } from "../../../db/schema/profiles";

export default async function handler(req: Request, res: Response) {
  const result: Profile[] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, req.params.userId));

  if (result.length === 0) {
    return res.status(404).send({
      success: false,
      error: { code: 100, message: "Profile not found" },
    });
  }

  res.status(200).json({ success: true, data: result[0] });
}
