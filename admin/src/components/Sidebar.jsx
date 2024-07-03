import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, Wallet, Newspaper, BellRing, Paperclip } from "lucide-react";
import logo from "../assets/logoC.png";

export default function Sidebar() {
  
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
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Users Details
            </label>
            <Link
            
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/admin"
            >
              Users
            </Link>
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
           

            
          </div>
        </nav>
      </div>
    </aside>
  );
}
