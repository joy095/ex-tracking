import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(
    "mongodb+srv://joy_456:6295511263Joy@cluster0.ngc5phv.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Success to connect with DB");
}

export default connect;
