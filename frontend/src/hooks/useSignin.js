// Import React and useState from "react"
import React, { useState } from "react";

// Import toast from "react-hot-toast"
import toast from "react-hot-toast";

// Define a custom hook named useSignin
function useSignin() {
  // Initialize the loading state to false using useState hook
  const [loading, setLoading] = useState(false);

  // Define the signin function that takes an object with email and password properties
  const signin = async ({ email, password }) => {
    // Set the loading state to true
    setLoading(true);

    // Make a POST request to "http://localhost:8000/api/user/login" using fetch API
    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        // Set the request method to POST
        method: "POST",
        // Set the request headers to include "Content-Type: application/json"
        headers: {
          "Content-Type": "application/json",
        },
        // Set the request body to a JSON string containing email and password
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Parse the response as JSON
      const data = await response.json();
    
      // If the response status is OK, set the user token in localStorage and show a success toast
      if (response.ok) {
        localStorage.setItem("user-token", data.user.token);
        localStorage.setItem("userId", data.user.id);
        toast.success("Login successful");

        // Redirect to the home page after a delay of 1000 milliseconds
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);

        // Return true to indicate successful login
        return true;
      } else {
        // If the response status is not OK, throw an error with the message "Login failed" or the actual error message from the server
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      // If there is an error during the request, log the error to the console and show an error toast
      // console.log(error);
      toast.error(error.message);
    } finally {
      // Regardless of the outcome, set the loading state to false
      setLoading(false);
    }

    // Return false to indicate that the login function has finished executing
    return false;
  };

  // Return the signin function and the loading state
  return { signin, loading };
}

// Export the useSignin custom hook
export default useSignin;
