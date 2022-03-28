import express from "express";
import {
  Userauthentication,
  Userregistration,
  userProfileupdate,
  doctorName,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(Userregistration);
router.post("/login", Userauthentication);
router.route("/profile").post(protect, userProfileupdate);
router.get("/doctorNames", doctorName);

export default router;
