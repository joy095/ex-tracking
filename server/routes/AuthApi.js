import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
const router = Router();

router.post("/register", async (req, res) => {
  // get all from data
  const { email, password, firstName, lastName } = req.body;
  // check if the user exists with the same email
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
  // hash the epassword
  // store user
  res.status(201).json({ message: "user is created" });
});

export default router;
