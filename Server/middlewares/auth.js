import { jwt } from "jsonwebtoken";
import User from "../models/User";

//middleware to protect routes
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password -__v");
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized access", success: false });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error("Authentication Error:", err);
    return res
      .status(401)
      .json({ message: "Unauthorized access", success: false });
  }
};
