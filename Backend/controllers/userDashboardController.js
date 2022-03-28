import AppointmentSchemaModel from "../models/appointmentBookingModel.js";
import PModel from "../models/pathalogyModel.js";

const getAppointments = async (req, res) => {
  res.json(await AppointmentSchemaModel.find());
};

const getLapReports = async (req, res) => {
  res.json(await PModel.find());
};
export { getAppointments, getLapReports };
