import jwt from "jsonwebtoken";
const genetateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  }); //IT will give token
  //save token in cookie
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //,prevent xss attacts cors site scripting attacks, accessable on http not with javasctrip,
    sameSite: "strict", //csrf attacts cors site request frogery attacts
    secure: process.env.NODE_ENV !== "development",
  });
};

export default genetateTokenAndSetCookie;
