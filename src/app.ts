import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFoundHandler from "./app/middlewares/notFoundHandler";
import path from "path";

const app: Application = express();
app.use(cors());

//Parsers
app.use(express.json());

// Route

app.use("/static", express.static(path.join(__dirname, "../assets")));

app.get("/", (req: Request, res: Response) => {
  // res.send("Smart chat server running successfully!");
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Global error handler
app.use(globalErrorHandler);

//Handling not found
app.use(notFoundHandler);

export default app;
