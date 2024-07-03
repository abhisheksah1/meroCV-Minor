import React, { useState } from "react";


function Dashboard() {
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
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className=" text-xl pl-5  font-bold" >MeroCV</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
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
            <a
              href="/login"
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <i className=" mr-2 fa fa-sign-in" aria-hidden="true"></i>
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
      </div>
    </div>
  );
}

export default Dashboard;
