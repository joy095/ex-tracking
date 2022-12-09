import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const router = Router();

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists." });
    return;
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashPassword = await bcrypt.hashSync(password, salt);

  const user = await User({
    email,
    password: hashPassword,
    firstName,
    lastName,
  });
  await user.save();
  res.status(201).json({ message: "user is created" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(406).json({ message: "creaditials not found" });
    return;
  }

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    res.status(406).json({ message: "creaditials not found" });
    return;
  }

  // create jwt token
  const payload = {
    username: email,
    _id: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  console.log(token);
  res.json({ message: "successfully loged in.", token, user });
});

export default router;
