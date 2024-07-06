// External deps
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

// Internal deps
import { UsersTable } from "./users.js";

export const TransactionsTable = sqliteTable("transactions", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  amount: integer("amount", { mode: "number" }).notNull(),
  transactionType: text("transaction_type", { enum: ["SUS", "CASH_IN", "CASH_OUT"] }).notNull(),
  date: text("date").notNull(),
  user_id: integer("user_id", { mode: "number" })
    .notNull()
    .references(() => UsersTable.id),
});

export type Transaction = typeof TransactionsTable.$inferSelect;
