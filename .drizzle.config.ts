// External deps
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schemas/*.ts",
  out: "./src/db/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  dialect: "sqlite",
  verbose: true,
  strict: true,
});
