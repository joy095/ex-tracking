import mongoose from "mongoose";

async function connect() {
  const username = process.env.MONGO_DB_USERNAME;
  const url = process.env.MONGO_DB_URL;
  const passport = process.env.MONGO_DB_PASSWORD;
  await mongoose.connect(
    `mongodb+srv://${username}:${passport}@${url}/?retryWrites=true&w=majority`
  );
  console.log("Success to connect with DB");
}

export default connect;
