import React, { useState } from "react";
import adminSignin from "../components/hooks/adminSignin";
import { Link } from "react-router-dom";

function Signin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember me"
  const { loading, signin } = adminSignin();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading === true) {
      return;
    }
    await signin({
      email: input.email,
      password: input.password,
    });

    setInput({
      email: "",
      password: "",
    });
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <form
        className="bg-gray-300 p-8 rounded-lg shadow-lg backdrop-blur-md w-full max-w-xl "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <label className="flex justify-center pb-10 font-bold text-2xl">
            <span>Sign In Your Account</span>
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
              {showPassword ? <i className="fa fa-eye text-2xl"  aria-hidden="true"></i> : <i className="fa fa-eye-slash text-2xl" aria-hidden="true"></i>}
            </button>
          </label>
          <label className="flex justify-between items-center pb-5">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox h-5 w-5"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <span className="form-checkbox-label ml-2">Remember me</span>
            </div>
            <div>
              <span>
                {" "}
                <a
                  to="/recovery"
                  className="text-red-500 font-semibold  hover:text-red-300"
                >
                  Forgot Password?
                </a>
              </span>
            </div>
          </label>
          <button className="btn" disabled={loading}>
            {loading ? "Logging..." : "Sign In"}
          </button>
        </div>
        <label className="flex justify-between pt-10">
          <div>
            <span className="text-blue-500">Don't have a Account?</span>
          </div>
          <div>
            <span>
              <Link to="/signup" className="font-semibold hover:text-red-300">
                Register Here
              </Link>
            </span>
          </div>
        </label>
      </form>
    </div>
  );
}

export default Signin;
