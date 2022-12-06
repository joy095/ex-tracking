import { Router } from "express";
import Transation from "../models/Transation.js";

const router = Router();

router.get("/", async (req, res) => {
  const transation = await Transation.find({}).sort({ createdAt: -1 });
  res.json({ data: transation });
});

router.post("/", async (req, res) => {
  const { amount, description, date } = req.body;
  const transation = new Transation({
    amount,
    description,
    date,
  });
  await transation.save();
  res.json({ message: "Success" });
});

router.delete("/:id", async (req, res) => {
  await Transation.deleteOne({ _id: req.params.id });
  res.json({ message: "success" });
});

router.patch("/:id", async (req, res) => {
  await Transation.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json({ message: "success" });
});

export default router;
