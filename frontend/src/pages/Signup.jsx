import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

function Signup() {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, signup } = useSignup();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await signup({
      fullName: input.fullName,
      username: input.username,
      email: input.email,
      password: input.password,
      confirmPassword: input.confirmPassword,
    });

    if (success) {
      setInput({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        window.location.href = "/login";
      },1000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[93vh]">
      <form
        className="bg-gray-300 p-8 rounded-lg shadow-lg backdrop-blur-md w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <label className="flex justify-center pb-10 font-bold text-2xl">
            <span>Register Your Account</span>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Full Name"
              name="fullName"
              value={input.fullName}
              onChange={handleInputChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Username"
              name="username"
              value={input.username}
              onChange={handleInputChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleInputChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              placeholder="Password"
              className="grow"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              placeholder="Confirm Password"
              className="grow"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleInputChange}
            />
          </label>
          <button className="btn" disabled={loading}>
            {loading ? "Signing Up..." : "Register"}
          </button>
          <div className="flex justify-center gap-4 pt-10">
            <div>
              <span>Already Have Account</span>
            </div>
            <div>
              <span>
                <a href="/login" className="font-semibold hover:text-red-300">
                  Sign In
                </a>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
