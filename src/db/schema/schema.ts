// External deps
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const UsersTable = sqliteTable("users", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

export const CardsTable = sqliteTable("cards", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  issuer: text("issuer", { enum: ["VISA", "MASTERCARD"] }).notNull(),
  name: text("name").notNull(),
  expirationDate: text("expiration_date").notNull(),
  lastDigits: integer("last_digits", { mode: "number" }).notNull(),
  balance: integer("balance", { mode: "number" }).notNull(),
  currency: text("currency", { enum: ["ARS", "USD"] }).notNull(),
  user_id: integer("user_id", { mode: "number" })
    .notNull()
    .references(() => UsersTable.id),
});

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
