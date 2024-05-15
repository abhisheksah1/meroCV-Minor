import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Sidebar></Sidebar>}></Route>
        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/profile" element={<AdminProfile></AdminProfile>}></Route>
      </Routes>
    </>
  );
}

export default App;
