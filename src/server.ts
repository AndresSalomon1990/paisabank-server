// External deps
import express, { urlencoded, json } from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

export default app;
