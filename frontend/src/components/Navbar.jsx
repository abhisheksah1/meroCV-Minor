import React, { useState } from "react";
import { Link } from "react-router-dom";
import contactUs from "../hooks/contactUs";

function Navbar() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const token = localStorage.getItem("user-token");

  const logoutHandler = () => {
    setShowLogoutPopup(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("user-token");
    window.location.href = "/login";
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const contactHandler = () => {
    setShowContactPopup(true);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
  };

  //handling contact submit
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    message: "",
    company: "",
    phoneNumber: "",
  });
  const { loading, contactRegister } = contactUs();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    await contactRegister({
      fullName: input.fullName,
      email: input.email,
      message: input.message,
      company: input.company,
      phoneNumber: input.phoneNumber,
    });

    setInput({
      fullName: "",
      email: "",
      message: "",
      company: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="navbar bg-slate-100 sticky top-0 right-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 text-2xl p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/cvtemp" className="font-semibold text-xl">
                Templates
              </a>
            </li>
            <li>
              {token ? (
                <Link
                  className="font-semibold text-xl"
                  onClick={contactHandler}
                >
                  Contact
                </Link>
              ) : (
                <Link className="font-semibold text-xl" to={"/login"}>
                  Contact
                </Link>
              )}
            </li>
          </ul>
        </div>
        <a href="/" className=" font-bold text-3xl  ml-10">
          MeroCV
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/cvtemp" className="font-semibold text-xl">
              Templates
            </a>
          </li>
          <li>
            {token ? (
              <Link className="font-semibold text-xl" onClick={contactHandler}>
                Contact
              </Link>
            ) : (
              <Link className="font-semibold text-xl" to={"/login"}>
                Contact
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-10">
        {token ? (
          <button className="btn font-semibold text-xl" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <a href="/login" className="btn text-xl">
            Sign In
          </a>
        )}
      </div>

      {showLogoutPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px 50px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p className="font-semibold pb-3 ">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end gap-5 font-semibold">
              <button className="btn" onClick={confirmLogout}>
                Yes
              </button>
              <button className="btn" onClick={cancelLogout}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {showContactPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px 50px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex justify-end gap-5 font-semibold">
                  <button
                    className="btn float-right"
                    onClick={closeContactPopup}
                  >
                    ✖
                  </button>
                </div>
                <label className="flex font-bold text-4xl">
                  <span>Get In Touch</span>
                </label>
                <label className="flex pb-5 font-semibold text-xl">
                  <span>We are here for you! How can I help you?</span>
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
                    placeholder="Company"
                    name="company"
                    value={input.company}
                    onChange={handleInputChange}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="email"
                    className="grow"
                    placeholder="Email"
                    name="email"
                    value={input.email}
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
                <label className="flex items-center gap-2">
                  <textarea
                    placeholder="Your thoughts..."
                    name="message"
                    id="message"
                    rows={4}
                    className="block input-boarder input w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100"
                    value={input.message}
                    onChange={handleInputChange}
                  />
                </label>
                <button className="btn text-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
