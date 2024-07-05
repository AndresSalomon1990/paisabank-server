// External deps
import { Router } from "express";

// Internal deps
import { validateToken } from "../middlewares/validate-token.ts";
import { getLastTransactions, getAllTransactions } from "../controllers/transactions.ts";

const transactionsRouter = Router();

/*
  path: /paisabank/movements
*/

transactionsRouter.get("/last", validateToken, getLastTransactions);

transactionsRouter.get("/all", validateToken, getAllTransactions);

export default transactionsRouter;
