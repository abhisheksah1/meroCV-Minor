import React, { useState } from "react";
import toast from "react-hot-toast";

// Custom hook for handling signup functionality
function useSignup() {
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Function to handle signup process
  const signup = async ({
    email,
    username,
    fullName,
    password,
    confirmPassword,
  }) => {
    setLoading(true); // Set loading state to true
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

      const data = await response.json(); // Parse response JSON
      if (response.ok) {
        toast.success("Successfully registered"); // Show success message
        setLoading(false); // Set loading state to false
        return true; // Return true to indicate successful signup
      } else {
        throw new Error(data.message || "Signup failed"); // Throw error if signup failed
      }
    } catch (error) {
      console.error(error); // Log any errors that occur
      toast.error(error.message); // Show error message
    } finally {
      setLoading(false); // Set loading state to false
    }
    return false; // Return false to indicate failed signup
  };

  // Return the signup function and loading state
  return { signup, loading };
}

export default useSignup;
