import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    userName,
    password,
    confirmpassword,
    gender,
  }) => {
    //for validations
    const success = handleInputsError({
      fullName,
      userName,
      password,
      confirmpassword,
      gender,
    });
    if (!success) {
      return;
    }

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
      if (data) {
        console.log(data);
        toast.success("user successfully register");
      }
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
