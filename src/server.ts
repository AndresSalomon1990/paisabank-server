// External deps
import express, { urlencoded, json } from "express";
import cors from "cors";

// Internal deps
import { error } from "./middlewares/error.ts";
import { notFound } from "./middlewares/not-found.ts";

const app = express();

// Middlewares
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(error);
app.use(notFound);

export default app;
