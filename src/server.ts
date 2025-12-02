import Express from "express";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  try {
    const app = Express();
    app.use(Express.json());

    const PORT = process.env.PORT ?? 3000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.debug("Failed to start server:", error);
    process.exit(1);
  }
};


startServer();
