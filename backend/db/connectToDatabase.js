import mongoose from "mongoose";

const mongoDbConnections = async () => {
  try {
    await mongoose.connect(process.env.MONGOO_DB_URI);
    console.log("MongoDB successfully connected");
  } catch (error) {
    console.log("Error connection to mongodb", error.message);
  }
};

export default mongoDbConnections;
