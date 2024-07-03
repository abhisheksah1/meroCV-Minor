import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }, // Corrected field name
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

const feedBack = mongoose.model("feedBack", feedbackSchema);

export default feedBack;
