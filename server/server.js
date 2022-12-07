import cors from "cors";
import express from "express";
import connect from "./database/mongodb.js";
import bodyParser from "body-parser";
import AuthApi from "./routes/AuthApi.js";
import TransationsApi from "./routes/TransationsApi.js";

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/transation", TransationsApi);
app.use("/auth", AuthApi);

await connect();

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});
