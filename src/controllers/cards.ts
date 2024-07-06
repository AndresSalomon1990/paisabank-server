// External deps
import type { Request, Response } from "express";
import { eq } from "drizzle-orm";

// Internal deps
import { db } from "../db/db.js";
import { CardsTable } from "../db/schemas/cards.js";
import { getIdFromToken } from "../lib/token.js";

export const getAllCards = async (req: Request, res: Response) => {
  try {
    const { token } = req.headers;
    const userId = getIdFromToken(token as string);

    const cards = await db
      .select()
      .from(CardsTable)
      .where(eq(CardsTable.user_id, Number(userId)));

    return res.status(200).json({ success: true, data: cards });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error | Something went wrong" });
  }
};
