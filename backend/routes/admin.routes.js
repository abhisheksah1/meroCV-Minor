import express from "express";

const router = express.Router();
import { adminRegister, adminLogin } from "../controllers/admin.controllers.js";

router.post("/adminRegister", adminRegister);
router.post("/adminLogin", adminLogin);

export default router;
