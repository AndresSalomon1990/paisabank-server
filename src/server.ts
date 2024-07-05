// External deps
import express, { urlencoded, json } from "express";
import cors from "cors";

// Internal deps
import { error } from "./middlewares/error.ts";
import { notFound } from "./middlewares/not-found.ts";
import authRouter from "./routes/auth.ts";
import cardsRouter from "./routes/cards.ts";
import transactionsRouter from "./routes/transactions.ts";

const app = express();

// Middlewares & routes
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/paisabank", authRouter);
app.use("/paisabank", cardsRouter);
app.use("/paisabank/movements", transactionsRouter);

app.use(error);
app.use(notFound);

export default app;
