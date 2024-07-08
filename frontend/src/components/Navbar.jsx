import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/abhishek.jpg";

import Logo from "../assets/logoC.png";
import { useLoginContext } from "../context/useContext";

function Navbar() {
  // Destructuring values from login context
  const { setShowLogin, setShowContact, setShowLogout } = useLoginContext();

  // Get the user token from local storage
  const token = localStorage.getItem("user-token");
  const fullName = localStorage.getItem("fullName");

  // Function to handle logout
  const logoutHandler = () => {
    setShowLogout(true); // Show logout confirmation
  };

  return (
    <div className="navbar lg:h-10 sm:h-32 bg-slate-100 sticky top-0 right-0 left-0 z-50">
      <div className="navbar-start">
        {/* Your menu toggle code */}

        <a href="/" className=" font-bold text-3xl  ml-10">
          <img className=" lg:h-8 lg:w-44 sm:h-10 sm:w-48" src={Logo} alt="" />
        </a>
      </div>

      {/* Center menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/cvtemp" className="font-semibold lg:text-xl sm:text-3xl">
              Templates
            </a>
          </li>
          <li>
            {token ? (
              <a className="font-semibold lg:text-xl sm:text-3xl" onClick={setShowContact}>
                Contact
              </a>
            ) : (
              <Link className="font-semibold lg:text-xl sm:text-3xl" onClick={setShowLogin}>
                Contact
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Right-end menu */}
      <div className="navbar-end mr-10">
        <div className="dropdown dropdown-end">
          {/* Avatar button */}

          {token ? (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
            >
              <div className="   rounded-full">
                <img src={img} />
              </div>
            </div>
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar lg:w-10 sm:w-20"
            >
              <div className=" rounded-full">
                <img alt="PP" />
              </div>
            </div>
          )}

          {/* Dropdown content */}
          <ul className="menu lg:menu-sm dropdown-content sm:menu-lg bg-base-100  rounded-box z-[1] mt-3 w-52 sm:w-60 p-2 shadow">
            {/* Profile link */}
            <li>
              {token ? (
                <Link to="/updateProfile" className="lg:text-lg sm:text-3xl">
                  <i className="fa fa-user-o pr-2 lg:text-lg" aria-hidden="true"></i>
                  {fullName}
                </Link>
              ) : (
                <Link className="font-semibold  lg:text-lg sm:text-3xl" onClick={setShowLogin}>
                  <i className="fa fa-user-o pr-2" aria-hidden="true"></i>
                  Profile
                </Link>
              )}
            </li>

            {/* Logout or Sign In button */}
            <li>
              {token ? (
                <button
                  className="flex transform items-center rounded-lg lg:text-lg sm:text-3xl px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={logoutHandler}
                >
                  <i className="mr-2 fa fa-sign-out" aria-hidden="true"></i>
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="flex transform items-center lg:text-lg sm:text-3xl rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <i className=" mr-2 fa fa-sign-in" aria-hidden="true"></i>
                  Sign In
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
