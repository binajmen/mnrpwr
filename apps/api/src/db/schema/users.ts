import { relations, type InferModel } from "drizzle-orm";
import { pgTable, text, uniqueIndex } from "drizzle-orm/pg-core";
import { profiles } from "./profiles";

export const users = pgTable(
  "users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
  },
  (user) => {
    return {
      emailIndex: uniqueIndex("email_idx").on(user.email),
    };
  }
);

export const usersRelations = relations(users, ({ one }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
}));

export type User = InferModel<typeof users>;
