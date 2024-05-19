import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userName, password) => {
    //for validations ,this is a function which tells us about the error
    const success = handleInputsError({
      userName,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });
      const data = await res.json();
      if (!data) {
        throw new Error(data.error);
      }
      if (data.error) {
        toast.error(data.error);
        return;
      }

      //set user in localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));

      //now set user in context variable
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

///////////////for validations inputs
function handleInputsError({ userName, password }) {
  if (!userName || !password) {
    toast.error("Please fill the all fields..");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be greater then 6");
    return false;
  }
  return true;
}
