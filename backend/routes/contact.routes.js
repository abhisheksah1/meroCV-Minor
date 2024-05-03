import express from "express";
const router = express.Router();
import contactRegister from "../controllers/contact.controllers.js";

router.post("/contactPost", contactRegister);

export default router;
