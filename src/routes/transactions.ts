// External deps
import { Router } from "express";

// Internal deps
import { validateToken } from "../middlewares/validate-token.js";
import { getLastTransactions, getAllTransactions } from "../controllers/transactions.js";

const transactionsRouter = Router();

/*
  path: /paisabank/movements
*/

transactionsRouter.get("/last", validateToken, getLastTransactions);

transactionsRouter.get("/all", validateToken, getAllTransactions);

export default transactionsRouter;
