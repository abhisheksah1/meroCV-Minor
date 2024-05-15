import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logoC.png";
import { useLoginContext } from "../context/useContext";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowLogin, setShowContact, setShowLogout } = useLoginContext();

  //handling contact submit
  const logoutHandler = () => {
    setShowLogout(true);
  };

  const token = localStorage.getItem("user-token");

  return (
    <div className="navbar bg-slate-100 sticky top-0 right-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
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
          {showMenu && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 text-2xl p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/cvtemp" className="font-semibold text-md">
                  Templates
                </a>
              </li>
              <li>
                {token ? (
                  <a className="font-semibold text-md" onClick={setShowContact}>
                    Contact
                  </a>
                ) : (
                  <Link
                    className="font-semibold text-md"
                    onClick={setShowLogin}
                  >
                     Contact
                  </Link>
                )}
              </li>
            </ul>
          )}
        </div>

        <a href="/" className=" font-bold text-3xl  ml-10">
          <img className="h-8 w-44" src={Logo} alt="" />
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
              <a className="font-semibold text-xl" onClick={setShowContact}>
                Contact
              </a>
            ) : (
              <Link className="font-semibold text-xl" onClick={setShowLogin}>
                Contact
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-10">
        {token ? (
          <button
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            onClick={logoutHandler}
          >
            <i className="mr-2 fa fa-sign-out" aria-hidden="true"></i>
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <i className=" mr-2 fa fa-sign-in" aria-hidden="true"></i>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
