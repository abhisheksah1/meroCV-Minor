import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const AdminPage = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Function to handle login status change (for example purposes)
  const handleLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const token = localStorage.getItem("user-token");

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`w-64 bg-gray-800 text-white p-6 ${isAdminLoggedIn ? "animate-open" : "animate-close"}`}>
        <div className="text-lg font-semibold mb-6">Admin Panel</div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/" className="hover:text-gray-400">
              <i className="fa fa-area-chart pr-2" aria-hidden="true"></i>
                Dashboard
              </Link>
            </li>
            {isAdminLoggedIn && (
  token ? (
    <>
      <li className="mb-4">
        <Link to="/users" className="hover:text-gray-400">
        <i className="fa fa-user pr-2" aria-hidden="true"></i>
          Users
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/contacts" className="hover:text-gray-400">
        <i className="fa fa-mobile pr-2" aria-hidden="true"></i>
          Contacts
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/feedback" className="hover:text-gray-400">
        <i className="fa fa-commenting-o pr-2" aria-hidden="true"></i>
          Feedback
        </Link>
      </li>
      <li className="mb-4">
        <Link to="/subscribe" className="hover:text-gray-400">
        <i className="fa fa-thumbs-up pr-2" aria-hidden="true"></i>
          Subscribe
        </Link>
      </li>
    </>
  ) : (
    <>
      
    </>
  )
)}

          </ul>
        </nav>
        {/* Buttons for demo purposes */}
        {!isAdminLoggedIn ? (
          <button onClick={handleLogin} className="mt-6 bg-gray-100 text-black py-2 px-4 rounded transition duration-500 ease-in-out">
            <i className="fa fa-chevron-circle-down " aria-hidden="true">  Click Me</i>
          </button>
        ) : (
          <button onClick={handleLogout} className="mt-6 bg-gray-100 text-black py-2 px-4 rounded transition duration-300 ease-in-out">
            <i className="fa fa-chevron-circle-up " aria-hidden="true">   Click Me</i>
          </button>
        )}
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPage;

