import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./database/mongo.db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Zephorin SERVER!");
});

app.listen(PORT, async () => {
  console.log(`\nZephorin SERVER is running on port http://localhost:${PORT}`);
  await connectDB();
  console.log("--> Server: RUNNING...");
  console.log("--> Database: CONNECTED...");
});
