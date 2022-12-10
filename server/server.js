import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import * as dotenv from "dotenv";
import connect from "./database/mongodb.js";
import passportConfig from "./config/passport.js";
import routes from "./routes/index.js";

dotenv.config();

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", routes);

await connect();

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});
