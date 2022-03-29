import EmployeeModel from "../models/employeeModel.js";
import VaccineModel from "../models/vaccineModel.js";

const getEmployeeByGender = async (req, res) => {
  const employeeCountByGenderMale = await EmployeeModel.count({
    gender: { $regex: new RegExp("^" + "male" + "$", "i") },
  });
  const employeeCountByGenderFeMale = await EmployeeModel.count({
    gender: { $regex: new RegExp("^" + "female" + "$", "i") },
  });
  const employeeCountByGenderOther = await EmployeeModel.count({
    gender: { $regex: new RegExp("^" + "other" + "$", "i") },
  });
  return res.json({
    male: employeeCountByGenderMale,
    female: employeeCountByGenderFeMale,
    other: employeeCountByGenderOther,
  });
};

const getEmployeeByDepartment = async (req, res) => {
  const pipelineFemale = [
    { $match: { gender: new RegExp("^" + "female" + "$", "i") } },
    { $group: { _id: "$department", count: { $sum: 1 } } },
  ];

  const pipelineMale = [
    { $match: { gender: new RegExp("^" + "male" + "$", "i") } },
    { $group: { _id: "$department", count: { $sum: 1 } } },
  ];

  const pipelineOther = [
    { $match: { gender: new RegExp("^" + "other" + "$", "i") } },
    { $group: { _id: "$department", count: { $sum: 1 } } },
  ];

  const males = await EmployeeModel.aggregate(pipelineMale);
  const females = await EmployeeModel.aggregate(pipelineFemale);
  const others = await EmployeeModel.aggregate(pipelineOther);

  res.json({ females, males, others });
};

const getEmployeeByWorkingStatus = async (req, res) => {
  const pipelineStatus = [
    { $match: {} },
    { $group: { _id: "$emptype", count: { $sum: 1 } } },
  ];

  const result = await EmployeeModel.aggregate(pipelineStatus);

  res.json(result);
};
const getVaccineDetails = async (req, res) => {
  var resp = await VaccineModel.find({});

  return res.json(resp);
};
export {
  getEmployeeByGender,
  getEmployeeByDepartment,
  getVaccineDetails,
  getEmployeeByWorkingStatus,
};
