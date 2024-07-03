import axios from "axios";
import React, { useEffect, useState } from "react";
import Toast from "react-hot-toast";

function ProfileDetails() {
  const [updateUser, setUpdateUser] = useState({
    fullName: "",
    username: "",
    email: "",
  });
  const [userId, setUserId] = useState(""); // State to hold the user ID

  // Assume you're getting the user ID from local storage
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (!userId) return; // Skip fetch if userId is not set

    axios
      .get(`http://localhost:8000/api/user/${userId}`)
      .then((response) => {
        setUpdateUser(response.data); // Assuming response.data is { fullName, username, email }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        Toast.error("Failed to fetch user data. Please try again later.");
      });
  }, [userId, setUserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/user/updateProfile/${userId}`, updateUser)
      .then((response) => {
        Toast.success("Profile updated successfully!");
        setUpdateUser({ fullName: "", username: "", email: "" }); // Reset the state
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
        Toast.error("Failed to update user profile. Please try again later.");
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold text-white">Personal Details</p>
        <p className="text-l text-white">
          MeroCV uses this information to verify your identity and to keep our
          community safe. <br />
          You decide what personal details you make visible to others.
        </p>
        <hr className="border-gray-500" />

        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row md:gap-5">
                <div className="flex flex-col w-full md:w-1/2">
                  <label>Full Name:</label>
                  <input
                    className="pl-6 pr-4 pt-3 pb-3 text-black text-lg rounded-md w-full"
                    type="text"
                    name="fullName"
                    placeholder="Enter Name"
                    value={updateUser.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
                  <label htmlFor="username">Username:</label>
                  <input
                    className="pl-6 pr-4 pt-3 pb-3 text-black text-lg rounded-md w-full"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={updateUser.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email">Email:</label>
                <input
                  className="pl-5 pr-4 pt-3 pb-3 text-black text-lg rounded-md w-full"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={updateUser.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="pl-5 pr-5 pt-3 pb-3 rounded-md bg-gray-500 text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
