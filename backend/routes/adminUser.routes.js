import express from "express";
const router = express.Router();

import {
  deleteContact,
  deleteFeedback,
  deleteSubscribe,
  deleteUser,
  getAllContacts,
  getAllFeedback,
  getAllSubscribe,
  getAllUsers,
} from "../controllers/adminUser.controllers.js";

//User Routes
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:id", deleteUser);

//Contact Routes
router.get("/getAllContact", getAllContacts);
router.delete("/deleteContact/:id", deleteContact);

//feedback Routes
router.get("/getFeedback", getAllFeedback);
router.delete("/deleteFeedback/:id", deleteFeedback);

//subscribe routes

router.get("/getAllSubscribe", getAllSubscribe);
router.delete("/deleteSubscribe/:id", deleteSubscribe);

export default router;
