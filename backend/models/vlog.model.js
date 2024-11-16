import mongoose, { Schema, Types } from "mongoose";

const vlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Vlog = mongoose.model("Vlog", vlogSchema);

export default Vlog;
