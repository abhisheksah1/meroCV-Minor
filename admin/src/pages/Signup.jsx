import React, { useState } from "react";
import useSignup from "../components/hooks/adminSignup";

function Signup() {
  const [input, setInput] = useState({
    adminNumber: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading, signup } = useSignup();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await signup({
      adminName: input.adminName,
      phoneNumber: input.phoneNumber,
      email: input.email,
      password: input.password,
      confirmPassword: input.confirmPassword,
    });

    if (success) {
      setInput({
        adminName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
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
              placeholder="Admin Name"
              name="adminName"
              value={input.adminName}
              onChange={handleInputChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Phone Number"
              name="phoneNumber"
              value={input.phoneNumber}
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="grow"
              name="password"
              value={input.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fa fa-eye text-2xl" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-eye-slash text-2xl" aria-hidden="true"></i>
              )}
            </button>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="grow"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <i className="fa fa-eye text-2xl" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-eye-slash text-2xl" aria-hidden="true"></i>
              )}
            </button>
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
