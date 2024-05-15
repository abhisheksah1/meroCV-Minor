// Import React and useState from "react"
import React, { useState } from "react";



// Import toast from "react-hot-toast"
import toast from "react-hot-toast";

// Define a custom hook named useContactUs
function ContactUs() {
  // Initialize the loading state to false using useState hook
  const [loading, setLoading] = useState(false);

  // Define the contactRegister function that takes an object with fullName, company, email, phoneNumber, and message properties
  const contactRegister = async ({
    fullName,
    company,
    email,
    phoneNumber,
    message,
  }) => {
    // Set the loading state to true
    setLoading(true);

    // Make a POST request to "http://localhost:8000/api/contact/contactRegister" using fetch API
    try {
      const response = await fetch(
        "http://localhost:8000/api/contact/contactPost",
        {
          // Set the request method to POST
          method: "POST",
          // Set the request headers to include "Content-Type: application/json"
          headers: {
            "Content-Type": "application/json",
          },
          // Set the request body to a JSON string containing fullName, company, email, phoneNumber, and message
          body: JSON.stringify({
            fullName,
            company,
            email,
            phoneNumber,
            message,
          }),
        }
      );

      // Parse the response as JSON
      const data = await response.json();

      // If the response status is OK, show a success toast
      if (response.ok) {
        toast.success(data.message);

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);

        // Return true to indicate successful contact registration
        return true;
      } else {
        // If the response status is not OK, throw an error with the message from the server
        throw new Error(data.message || "Failed to register contact");
      }
    } catch (error) {
      // If there is an error during the request, log the error to the console and show an error toast
      // console.error(error);
      toast.error(error.message || "Failed to register contact");
    } finally {
      // Regardless of the outcome, set the loading state to false
      setLoading(false);
    }

    // Return false to indicate that the contact registration function has finished executing
    return false;
  };

  // Return the contactRegister function and the loading state
  return { contactRegister, loading };
}

// Export the useContactUs custom hook
export default ContactUs;
