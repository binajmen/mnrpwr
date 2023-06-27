import { type InferModel } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { users } from "./users";

export const profiles = pgTable("profiles", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  firstName: text("first_name"),
  lastName: text("last_name"),
});

export type Profile = InferModel<typeof profiles>;
