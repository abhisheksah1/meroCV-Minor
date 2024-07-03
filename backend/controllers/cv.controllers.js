import express from "express";
import Cv from "../models/cv.model.js";
import mongoose from "mongoose";

const router = express.Router();

// save the cv 


// Get all CVs
router.get("/", async (req, res) => {
  try {
    const cvList = await Cv.find();
    res.json(cvList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getRecent", async (req, res) => {
  try {
    const userId = String(req.query.userId); // Convert to string explicitly
    if (
      !userId ||
      userId.trim() === "" ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return res.status(404).json({ message: "userId is Invalid" });
    }
    const recentCv = await Cv.findOne({ userId }).sort({ _id: -1 }); // Sort by _id in descending order
    if (!recentCv) {
      return res.status(404).json({ message: "No recent CV found" });
    }

    res.json(recentCv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new CV
router.post("/create", async (req, res) => {
  const cv = new Cv({
    userId: req.body.userId,
    aboutInfo: req.body.aboutInfo || {},
    workExperience: req.body.workExperience || [],
    education: req.body.education || [],
    skills: req.body.skills || [],
    languages: req.body.languages || [],
    projects: req.body.projects || [],
    references: req.body.references || [],
  });

  try {
    const newCv = await cv.save();
    res.status(201).json(newCv);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware to get CV by ID
async function getCv(req, res, next) {
  let cv;

  try {
    cv = await Cv.findById(req.params.id);
    if (cv == null) {
      return res.status(404).json({ message: "Cannot find CV" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.cv = cv;
  next();
}

export default router;
