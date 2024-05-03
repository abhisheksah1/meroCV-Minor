import mongoose from "mongoose";

const SubscribeSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true,
  },
  
  
});

const Subscribe = mongoose.model("Subscribe", SubscribeSchema);

export default Subscribe;