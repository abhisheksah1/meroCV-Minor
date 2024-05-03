import React, { useState } from "react";
import toast from "react-hot-toast";

function useSubscribe() {
  const [loading, setLoading] = useState(false);

  const subscribe = async ({ email }) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message); // Display success message
      } else {
        throw new Error(data.message); // Throw an error with the message
      }
    } catch (error) {
      toast.error(error.message); // Display error message
    } finally {
      setLoading(false);
    }

    return false;
  };

  return { subscribe, loading };
}

export default useSubscribe;
