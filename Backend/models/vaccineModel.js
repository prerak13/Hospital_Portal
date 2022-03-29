import mongoose from "mongoose";

const vaccineSchema = mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  count: {
    type: String,
    required: true,
  },
});
const VaccineModel = mongoose.model("vaccine_records", vaccineSchema);

export default VaccineModel;
