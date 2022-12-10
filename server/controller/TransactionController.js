import Transation from "../models/Transation.js";

export const index = async (req, res) => {
  const transation = await Transation.find({}).sort({ createdAt: -1 });
  res.json({ data: transation });
};

export const create = async (req, res) => {
  const { amount, description, date } = req.body;
  const transation = new Transation({
    amount,
    description,
    date,
  });
  await transation.save();
  res.json({ message: "Success" });
};

export const destroy = async (req, res) => {
  await Transation.deleteOne({ _id: req.params.id });
  res.json({ message: "success" });
};

export const update = async (req, res) => {
  await Transation.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json({ message: "success" });
};
