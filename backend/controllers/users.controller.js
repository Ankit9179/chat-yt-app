import User from "../models/user.model.js";

//get users
export const getAllUser = async (req, res) => {
  try {
    const loggedInUserId = req.user._id; //getting from protected route

    const fillteredUser = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(fillteredUser);
  } catch (error) {
    console.error("Error during fetching all user", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
