import {
  getLapReports,
  getAppointments,
} from "../controllers/userDashboardController.js";

import express from "express";
const router = express.Router();

router.get("/getAppointments", getAppointments);
router.get("/getReports", getLapReports);

export default router;
