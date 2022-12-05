import express from "express";
import mongoose from "mongoose";

const PORT = 4000;
const app = express();

await mongoose.connect(
  "mongodb+srv://joy_456:6295511263Joy@cluster0.ngc5phv.mongodb.net/?retryWrites=true&w=majority"
);
console.log("Success to connect to DB");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});
