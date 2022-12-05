import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Transation from "./models/Transation.js";

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

await mongoose.connect(
  "mongodb+srv://joy_456:6295511263Joy@cluster0.ngc5phv.mongodb.net/?retryWrites=true&w=majority"
);
console.log("Success to connect to DB");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/transation", async (req, res) => {
  const { amount, description, date } = req.body;
  const transation = new Transation({
    amount,
    description,
    date,
  });
  await transation.save();
  res.json({ message: "Success" });
});

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});
