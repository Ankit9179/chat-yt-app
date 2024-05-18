import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmpassword,
    gender,
  }) => {
    //for validations ,this is a function which tells us about the error
    const success = handleInputsError({
      fullName,
      userName,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmpassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new error(data.error);
      }
      //set user in localstorage
      console.log(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      //use context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

///////////////for validations inputs
function handleInputsError({
  fullName,
  userName,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmpassword || !gender) {
    toast.error("Please fill the all fields..");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Password do not match..");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be greater then 6");
    return false;
  }
  return true;
}
