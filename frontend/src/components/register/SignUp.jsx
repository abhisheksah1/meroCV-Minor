import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { useLoginContext } from "../../context/useContext";

function SignUp() {
  const { setShowLogin, setShowRegister, showRegister } = useLoginContext(); // Destructuring values from login context
const [input, setInput] = useState({ // State for input fields
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility
const { loading, signup } = useSignup(); // Destructuring values from signup context

// Function to handle input changes
const handleInputChange = (e) => {
  setInput({ ...input, [e.target.name]: e.target.value });
};

// Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Call the signup function with the input values
  const success = await signup({
    fullName: input.fullName,
    username: input.username,
    email: input.email,
    password: input.password,
    confirmPassword: input.confirmPassword,
  });

  if (success) {
    // Reset the input fields after successful signup
    setInput({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Show the login form after a short delay
    setTimeout(() => {
      setShowRegister(false);
      setShowLogin(true);
    }, 1000);
  }
};

// Function to handle showing the login form
const handlerShow = () => {
  setShowRegister(false);
  setShowLogin(true);
};


  return (
    showRegister && (
      <div className="relative z-20">
        {showRegister && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
            <form
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-end gap-5 font-semibold">
                <button
                  className=" float-right"
                  onClick={() => setShowRegister(false)}
                >
                  ✖
                </button>
              </div>
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
                <i class="fa fa-user" aria-hidden="true" fill="currentColor"></i>
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
                    value={input.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
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
                      <i
                        className="fa fa-eye-slash text-2xl"
                        aria-hidden="true"
                      ></i>
                    )}
                  </button>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
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
                      <i
                        className="fa fa-eye-slash text-2xl"
                        aria-hidden="true"
                      ></i>
                    )}
                  </button>
                </label>
                <button className="btn" disabled={loading}>
                  {loading ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    "Register"
                  )}
                </button>
                <label className="flex justify-between gap-4 pt-10">
                  <div>
                    <span>Already Have Account ?</span>
                  </div>
                  <div>
                    <span>
                      <button
                        className="font-semibold hover:text-red-600"
                        onClick={handlerShow}
                      >
                        Sign In
                      </button>
                    </span>
                  </div>
                </label>
              </div>
            </form>
            <button
              className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowRegister(false)}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        )}
      </div>
    )
  );
}

export default SignUp;
