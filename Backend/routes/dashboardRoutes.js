import express from "express";
import {
  getEmployeeByGender,
  getEmployeeByDepartment,
  getVaccineDetails,
  getEmployeeByWorkingStatus,
} from "../controllers/dashboardController.js";

const router = express.Router();
router.get("/getEmployeeByDepartment", getEmployeeByDepartment);
router.get("/getEmployeeByGender", getEmployeeByGender);

router.get("/getVaccineDetails", getVaccineDetails);
router.get("/getEmployeeByWorkingStatus", getEmployeeByWorkingStatus);

export default router;
