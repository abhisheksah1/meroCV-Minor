<<<<<<< HEAD
import express from "express";

const router = express.Router();
import { adminRegister, adminLogin } from "../controllers/admin.controllers.js";

router.post("/adminRegister", adminRegister);
router.post("/adminLogin", adminLogin);

export default router;
=======
import express from "express";

const router = express.Router();
import { adminRegister, adminLogin } from "../controllers/admin.controllers.js";

router.post("/adminRegister", adminRegister);
router.post("/adminLogin", adminLogin);

export default router;
>>>>>>> 15a2524b3fa4966c4817fe7757e806ffb5c8fbc4
