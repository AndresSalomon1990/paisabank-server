// External deps
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

// Internal deps
import { UsersTable } from "./users.ts";

export const CardsTable = sqliteTable("cards", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  issuer: text("issuer", { enum: ["VISA", "MASTERCARD"] }).notNull(),
  name: text("name").notNull(),
  expirationDate: text("expiration_date").notNull(),
  lastDigits: integer("last_digits", { mode: "number" }).notNull(),
  balance: integer("last_digits", { mode: "number" }).notNull(),
  currency: text("name", { enum: ["ARS", "USD"] }).notNull(),
  user_id: integer("user_id", { mode: "number" })
    .notNull()
    .references(() => UsersTable.id),
});
