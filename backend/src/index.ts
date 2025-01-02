import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("Connected to the database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (request: Request, response: Response) => {
  response.json({ message: "Hey there!" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
