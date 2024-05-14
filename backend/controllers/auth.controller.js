import bycrpt from "bcryptjs";
import User from "../models/user.model.js";
import genetateTokenAndSetCookie from "../utils/generateToken.js";

//signup user
export const signupUser = async (req, res) => {
  try {
    const { fullName, userName, password, confirmpassword, gender } = req.body;
    //password match
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "password not matched" });
    }
    //exist user
    const existUserName = await User.findOne({ userName });
    if (existUserName) {
      return res.status(400).json({ error: "already userName exists" });
    }

    //hash passward
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);

    //generate profile pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    //create new user for save
    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //generate token and save cookie
      genetateTokenAndSetCookie(newUser._id, res);
      //save new user
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Enternal server error" });
  }
};

//login user
export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    //check user
    const user = await User.findOne({ userName });
    //compare password
    const isPasswordCurrect = await bycrpt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCurrect) {
      return res.status(400).json({ error: "Invalid username and password" });
    }
    //generate and send token in cookie
    genetateTokenAndSetCookie(user.id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Enternal server error" });
  }
};

// logout user
export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Enternal server error" });
  }
};
