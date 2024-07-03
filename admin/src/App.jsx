import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminPage from "./pages/AdminPage";
import Users from "./pages/Admin-Details/Users";
import Dashboard from "./pages/Admin-Details/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Contacts from "./pages/Admin-Details/Contacts";
import Feedback from "./pages/Admin-Details/Feedback";
import Subscribe from "./pages/Admin-Details/Subscribe";


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<AdminPage />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/users" element={<Users />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/subscribe" element={<Subscribe />} />

          <Route path="/login" element={< Signin/>}></Route>
          <Route path="/signup" element={< Signup/>}></Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
