import mongoose from "mongoose";

const docAppointmentSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  specialInstruction: {
    type: String,
    required: false,
  },
  patientName: {
    type: String,
    required: true,
  },
  docSelected: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: String,
    required: false,
  },
  selectedTime: {
    type: String,
    required: false,
  },
  dateTime: {
    type: String,
    required: false,
  },
});

const DocAppointment = mongoose.model("docappointments", docAppointmentSchema);

export default DocAppointment;
