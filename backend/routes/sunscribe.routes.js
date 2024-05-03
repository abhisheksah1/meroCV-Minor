import express from "express";
const router = express.Router();
import subscribeEmail from "../controllers/subscribeWithEmail.controllers.js";

router.post("/subscribe", subscribeEmail);

export default router;