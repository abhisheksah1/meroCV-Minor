import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "react-hot-toast";

function RecoveryPass() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      Toast.error("Please fill the email input");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/user/forgotPassword", {
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
        Toast.success("Check your email to reset your password");
      } else {
        Toast.error(data.message || "User not found");
      }
    } catch (error) {
      console.log(error);
      Toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center min-h-[93vh] overflow-hidden">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg backdrop-blur-md w-full max-w-xl">
          <div className="flex flex-col gap-4">
            <label className="flex justify-center pb-10 font-bold text-2xl">
              <span>Recover your Password</span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="flex items-center justify-between pt-10">
            <div>
              <Link
                to="/login"
                className="hover:border-b-2 border-spacing-2 border-[black] "
              >
                Go back
              </Link>
            </div>
            <div>
              <button type="submit" className="font-semibold btn">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RecoveryPass;
