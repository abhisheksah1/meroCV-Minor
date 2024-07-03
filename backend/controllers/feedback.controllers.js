import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import feedBack from "../models/feedback.model.js";

router.post("/postFeedBack", async (req, res) => {
  const { name, message } = req.body;

  try {
    const newFeedback = new feedBack({ name, message });
    await newFeedback.save();
    res.json(newFeedback);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});






export default router;
