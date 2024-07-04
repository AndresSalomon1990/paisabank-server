// External deps
import dotenv from "dotenv";

// Internal deps
import app from "./server.ts";

dotenv.config();

const port = process.env.PORT ?? 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
