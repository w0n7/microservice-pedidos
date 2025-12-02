import Express, { Request, Response } from "express";
import dotenv from "dotenv";
import { createTable } from "./seed.js";
dotenv.config();

const startServer = async () => {
  try {
    const app = Express();
    app.use(Express.json());

    const PORT = process.env.PORT ?? 3000;

    app.get("/test", async (req: Request, res: Response) => {
      const result = await createTable();

      console.log(result)
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.debug("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
