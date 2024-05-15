import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/useContext";
import useSignin from "../../hooks/useSignin";
import "./login.style.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { showLogin, setShowLogin, setShowRegister, setShowReset } =
    useLoginContext();
  const { loading, signin } = useSignin();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShow = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading === true) {
      return;
    }
    await signin({
      email: email,
      password: password,
    });

    setInput({
      email: "",
      password: "",
    });
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const resetHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowReset(true);
  };

  return (
    <div className="relative z-50">
      {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75 ">
          <form
            className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-xl animate-slideDown`}
            onSubmit={handleSubmit}
          >
            <div className="flex justify-end gap-5 font-semibold">
              <button
                type="button"
                className=" float-right "
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                ✖
              </button>
            </div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={toggleShowPassword}
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
              <label className="flex justify-between items-center pb-5">
                <div className="flex items-center">
                  <input type="checkbox" className="checkbox h-5 w-5" />
                  <span
                    className="form-checkbox-label ml-2"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  >
                    Remember me
                  </span>
                </div>
                <div>
                  <span>
                    {" "}
                    <button
                      onClick={resetHandler}
                      className="text-red-500 font-semibold  hover:text-red-900"
                    >
                      Forgot Password?
                    </button>
                  </span>
                </div>
              </label>
              <button className="btn" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            <label className="flex justify-between pt-10">
              <div>
                <span className="text-blue-500">Don't have a Account?</span>
              </div>
              <div>
                <span>
                  <button
                    onClick={handleShow}
                    className="font-semibold hover:text-red-500"
                  >
                    Register Here
                  </button>
                </span>
              </div>
            </label>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
