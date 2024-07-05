// External deps
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const UsersTable = sqliteTable("users", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});
