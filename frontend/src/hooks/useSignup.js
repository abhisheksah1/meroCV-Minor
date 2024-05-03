import React, { useState } from "react";
import toast from "react-hot-toast";

function useSignup() {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    email,
    username,
    fullName,
    password,
    confirmPassword,
  }) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          fullName,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Successfully registered");
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

export default useSignup;
