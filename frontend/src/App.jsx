import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import RecoveryPass from "./pages/RecoveryPass";
import { Toaster } from "react-hot-toast";
import CvTemplate from "./pages/Templates/CvTemplate";
import GreyTemplate from "./pages/templateForm/GreyTemplate";
import ResetPassword from "./pages/ResetPassword";
// import Contact from "./pages/contact/Contact";





function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Signin></Signin>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/recovery" element={<RecoveryPass></RecoveryPass>}></Route>
        <Route path="/cvtemp" element={<CvTemplate></CvTemplate>} />
        <Route path="/grayTemplate" element={<GreyTemplate></GreyTemplate>} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
      
       
      </Routes>
    </>
  );
}

export default App;
