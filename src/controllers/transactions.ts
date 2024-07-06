// External deps
import type { Request, Response } from "express";
import { and, eq, desc } from "drizzle-orm";

// Internal deps
import { db } from "../db/db.js";
import { TransactionsTable, type Transaction } from "../db/schemas/transactions.js";
import { getIdFromToken } from "../lib/token.js";

// Get last 5 transactions
export const getLastTransactions = async (req: Request, res: Response) => {
  try {
    const { token } = req.headers;
    const userId = getIdFromToken(token as string);

    const transactions = await db
      .select()
      .from(TransactionsTable)
      .where(eq(TransactionsTable.user_id, Number(userId)))
      .limit(5)
      .orderBy(desc(TransactionsTable.id));
    return res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error | Something went wrong" });
  }
};

// get all transactions filtered by type from request params
export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const { token } = req.headers;
    const userId = getIdFromToken(token as string);
    const { filter } = req.query;

    const transactions = await db
      .select()
      .from(TransactionsTable)
      .where(
        and(
          eq(TransactionsTable.user_id, Number(userId)),
          filter
            ? eq(TransactionsTable.transactionType, filter as Transaction["transactionType"])
            : undefined,
        ),
      )
      .orderBy(desc(TransactionsTable.id));

    return res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error | Something went wrong" });
  }
};
