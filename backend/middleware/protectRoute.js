//to verify the token
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //we can't  get cookie without cookie parser
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unautorized | No Token Providedddddd" });
    }
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); //it will return id which is stored in token by name userId
    if (!decoded) {
      return res.status(401).json({ error: "Unautorized | Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password"); //it will return the user without password
    if (!user) {
      return res.status(500).json({ error: "User Not Found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("error while verifying token", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
