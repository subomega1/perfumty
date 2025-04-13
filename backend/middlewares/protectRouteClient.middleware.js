import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protectRouteClient = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized: no token provided" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ message: "Not authorized: invalid token" });
    }
    const user = await User.findById(decode.id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ message: "Not authorized: user not found" });
    }
    req.userId = user._id;
    next();
  } catch (error) {
    console.log("error in protectRouteClient middleware", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export default protectRouteClient;
