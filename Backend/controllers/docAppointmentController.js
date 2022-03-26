import DocAppointment from "../models/docAppointmentModel.js";

const bookAppointment = async (req, res) => {
  const {
    email,
    specialInstruction,
    patientName,
    docSelected,
    selectedDate,
    selectedTime,
    dateTime,
  } = req.body.data;
  console.log(req.body.data);

  const appointment = await DocAppointment.create({
    email,
    specialInstruction,
    patientName,
    docSelected,
    selectedDate,
    selectedTime,
    dateTime,
  });

  res.json({
    _id: appointment._id,
    email: appointment.email,
    type: appointment.type,
    specialInstruction: appointment.specialInstruction,
    patientName: appointment.patientName,
    doctorName: appointment.doctorName,
    date: appointment.date,
    time: appointment.time,
  });
};

const getBookedAppointment = async (req, res) => {
  const appointment = await DocAppointment.find({ email: req.params.email });
  return res.json(appointment);
};

const deleteAppointment = async (req, res) => {
  const appointment = await DocAppointment.deleteOne({ _id: req.params.id });
  return res.json(appointment);
};

const updateAppointment = async (req, res) => {
  const appointment = await DocAppointment.findById(req.params.id);

  if (appointment) {
    appointment.dateTime = req.body.dateTime;
    appointment.selectedDate = req.body.selectedDate;
    appointment.selectedTime = req.body.selectedTime;
  }

  const updatedAppointment = await appointment.save();
  return res.json(200);
};

export {
  bookAppointment,
  getBookedAppointment,
  deleteAppointment,
  updateAppointment,
};
