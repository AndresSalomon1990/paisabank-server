// External deps
import express, { urlencoded, json } from "express";
import cors from "cors";

// Internal deps
import { error } from "./middlewares/error.ts";
import { notFound } from "./middlewares/not-found.ts";
import authRouter from "./routes/auth.ts";
import cardsRouter from "./routes/cards.ts";

const app = express();

// Middlewares & routes
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/auth", authRouter);
app.use("/api/cards", cardsRouter);

app.use(error);
app.use(notFound);

export default app;
