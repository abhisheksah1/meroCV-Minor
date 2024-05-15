import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { useLoginContext } from "../../context/useContext";

function SignUp() {
  const { setShowLogin, setShowRegister, showRegister } = useLoginContext();
  const [input, setInput] = useState({
    fullName: "",
    username: "",
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
        setShowRegister(false);
        setShowLogin(true);
      }, 1000);
    }
  };

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
