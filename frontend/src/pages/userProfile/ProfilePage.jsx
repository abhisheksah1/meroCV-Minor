import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfilesDetails/ProfileDetails";

function ProfilePage() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

 const renderContent = () => {
  switch (activeLink) {
    case "Profiles":
      return (
        <div key="profiles-content" className="p-5 text-white">
          Profile content goes here...
        </div>
      );
    case "Password":
      return (
        <div key="password-content" className="p-5 text-white">
          Password and security content goes here...
        </div>
      );
    case "Personal":
      return (
        <div key="personal-content" className="p-5 text-white">
          <ProfileDetails />
        </div>
      );
    default:
      return (
        <div key="default-content" className="p-5 text-white">
          Select an option to view details...
        </div>
      );
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full min-h-screen max-w-8xl mb-28 mx-auto p-8 flex">
        <div className="flex flex-col gap-2 w-1/3">
          <a className="text-lg pl-5 font-semibold text-white">MeroCV</a>
          <p className="text-xl pl-5 font-bold text-white">Account Center</p>
          <p className="text-l pl-5 text-white">
            Manage your connected experiences <br /> and account settings across
            MeroCV.
          </p>
          <Link
            to="#"
            key="profile-i"
            className={`text-black max-w-sm mt-3 ml-3 pl-5 pr-32 pb-3 pt-3 rounded-lg ${
              activeLink === "Profiles" ? "bg-white" : "text-white"
            }`}
            onClick={() => handleLinkClick("Profiles")}
          >
            <i className="fa fa-user-o pr-5" aria-hidden="true"></i>
            Profiles
          </Link>
          <p className="text-l font-bold pl-5 text-white mt-5">
            Account settings
          </p>
          <Link
          key="password-i"
            to="#"
            className={`text-black max-w-sm mt-3 ml-3 pl-5 pr-32 pb-3 pt-3 rounded-lg ${
              activeLink === "Password" ? "bg-white" : "text-white"
            }`}
            onClick={() => handleLinkClick("Password")}
          >
            <i className="fa fa-shield pr-5" aria-hidden="true"></i>
            Password and security
          </Link>
          <Link
          key="personal-i"
            className={`text-black max-w-sm mt-3 ml-3 pl-5 pr-32 pb-3 pt-3 rounded-lg ${
              activeLink === "Personal" ? "bg-white" : "text-white"
            }`}
            onClick={() => handleLinkClick("Personal")}
          >
            <i className="fa fa-id-card-o pr-5" aria-hidden="true"></i>
            Personal details
          </Link>
        </div>
        <div className="border-l border-gray-400 mx-6 h-auto"></div>
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
