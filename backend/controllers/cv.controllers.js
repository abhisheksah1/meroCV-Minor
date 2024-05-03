import express from "express";
import Cv from "../models/cv.model.js";

const router = express.Router();

// Get all CVs
router.get("/", async (req, res) => {
  try {
    const cvList = await Cv.find();
    res.json(cvList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single CV by ID
router.get("/:id", getCv, (req, res) => {
  res.json(res.cv);
});

// Create a new CV
router.post("/create", async (req, res) => {
  const cv = new Cv({
    aboutInfo: req.body.aboutInfo || {},
    workExperience: req.body.workExperience || [],
    education: req.body.education || [],
    skills: req.body.skills || [],
    languages: req.body.languages || {},
    projects: req.body.projects || [],
    certifications: req.body.certifications || [],
    references: req.body.references || [],
  });

  try {
    const newCv = await cv.save();
    res.status(201).json(newCv);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a CV by ID
// router.patch("/:id", getCv, async (req, res) => {
//   if (req.body.aboutInfo!= null) {
//     res.cv.aboutInfo = req.body.aboutInfo;
//   }
//   if (req.body.workExperience!= null) {
//     res.cv.workExperience = req.body.workExperience;
//   }
//   if (req.body.education!= null) {
//     res.cv.education = req.body.education;
//   }
//   if (req.body.skills!= null) {
//     res.cv.skills = req.body.skills;
//   }
//   if (req.body.languages!= null) {
//     res.cv.languages = req.body.languages;
//   }
//   if (req.body.projects!= null) {
//     res.cv.projects = req.body.projects;
//   }
//   if (req.body.certifications!= null) {
//     res.cv.certifications = req.body.certifications;
//   }
//   if (req.body.references!= null) {
//     res.cv.references = req.body.references;
//   }

//   try {
//     const updatedCv = await res.cv.save();
//     res.json(updatedCv);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

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