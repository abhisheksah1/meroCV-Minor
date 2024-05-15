import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, Wallet, Newspaper, BellRing, Paperclip } from "lucide-react";
import logo from "../assets/logoC.png";

export default function Sidebar() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

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
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-slate-100 px-5 py-8">
      <a href="/">
        <img className="w-5/6" src={logo} alt="" />
      </a>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              analytics
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Sales</span>
            </a>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              content
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Blogs</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Notifications</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Account pages
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/profile"
            >
              <i className="fa fa-user" aria-hidden="true"></i>

              <span className="mx-2 text-sm font-medium">Profile</span>
            </Link>
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
                <a
                  href="/login"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <i className=" mr-2 fa fa-sign-in" aria-hidden="true"></i>
                  Sign In
                </a>
              )}
              ``
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
          </div>
        </nav>
      </div>
    </aside>
  );
}
