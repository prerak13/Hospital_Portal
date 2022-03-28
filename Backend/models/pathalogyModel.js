import mongoose from "mongoose";

const pSchema = mongoose.Schema({
  patientName: {
    type: String,
  },
  patientEmail: {
    type: String,
  },
  testType: {
    type: String,
  },
  cost: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
  },

  docURI: {
    type: String,
  },
  comments: {
    type: String,
  },
});
const PModel = mongoose.model("path_datas", pSchema);

export default PModel;
