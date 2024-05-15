import React, { useState } from "react";
import toast from "react-hot-toast";

function adminSignup() {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    email,
    adminName,
    phoneNumber,
    password,
    confirmPassword,
  }) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/admin/adminRegister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          adminName,
          phoneNumber,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Successfully Admin registered");
        setLoading(false);
        return true;
      } else {
        throw new Error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    return false;
  };

  return { signup, loading };
}

export default adminSignup;
