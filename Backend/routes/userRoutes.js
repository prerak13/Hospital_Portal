import express from "express";
import { Userregistration, Userauthentication, userProfileupdate,} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.route("/").post(Userregistration);
router.post("/login", Userauthentication);
router.route("/profile").post(protect, userProfileupdate);

export default router;
