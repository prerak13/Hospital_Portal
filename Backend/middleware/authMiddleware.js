import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

//authorization checked by token 
const protect = asyncHandler(async (req, res, next) => {
  let authtoken;
  if (
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      authtoken = req.headers.authorization.split(" ")[1];
      const tokendecoded = jwt.verify(authtoken, process.env.JWT_SECRET);
      req.user = await User.findById(tokendecoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Unauthorized user, failed token");
    }
  }
  if (!authtoken) {
    res.status(401);
    throw new Error("Unauthorized, empty token");
  }
});

export { protect };
