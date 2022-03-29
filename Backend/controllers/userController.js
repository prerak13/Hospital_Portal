import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generatedToken from "../utils/generatetoken.js";

const Userauthentication = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      ispatient: user.ispatient,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generatedToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const Userregistration = asyncHandler(async (req, res) => {
  const { name, email, ispatient, password, pic } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User exists");
  }

  const user = await User.create({
    name,
    email,
    ispatient,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      ispatient: user.ispatient,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generatedToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const userProfileupdate = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      ispatient: updatedUser.ispatient,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      token: generatedToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Exists");
  }
});

const doctorName = async (req, res) => {
  const names = await User.find({ ispatient: false }, "name ");
  return res.json(names);
};

export { Userauthentication, userProfileupdate, Userregistration, doctorName };
