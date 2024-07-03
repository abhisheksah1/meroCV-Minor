import React, { useState } from "react";
import toast from "react-hot-toast";

// Custom hook for handling subscription functionality
function useSubscribe() {
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Function to handle subscription process
  const subscribe = async ({ email }) => {
    setLoading(true); // Set loading state to true

    try {
      const response = await fetch("http://localhost:8000/api/subscribe/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json(); // Parse response JSON

      if (response.ok) {
        toast.success(data.message); // Display success message
      } else {
        throw new Error(data.message); // Throw an error with the message
      }
    } catch (error) {
      toast.error(error.message); // Display error message
    } finally {
      setLoading(false); // Set loading state to false
    }

    return false; // Return false to indicate failed subscription
  };

  // Return the subscribe function and loading state
  return { subscribe, loading };
}

export default useSubscribe;
