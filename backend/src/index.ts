import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("Connected to the database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (request: Request, response: Response) => {
  response.send({ message: "Health ok!" });
});

app.use("/api/v1/user", userRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
