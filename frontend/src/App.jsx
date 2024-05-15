import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import { Toaster } from "react-hot-toast";
import CvTemplate from "./pages/Templates/CvTemplate";
import GreyTemplate from "./pages/templateForm/GreyTemplate";
import ResetPassword from "./pages/ResetPassword";
import TemplateDesign from "./pages/TemplateDesign";
import Footer from "./pages/Footer";
import Login from "./components/login/Login";
import SignUp from "./components/register/SignUp";
import Contact from "./components/contact/Contact";
import Logout from "./components/logout/Logout";
import ForgotPass from "./components/forgotPass/ForgotPass";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Login />
      <SignUp />
      <Contact />
      <Logout />
      <ForgotPass />

      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/cvtemp" element={<CvTemplate></CvTemplate>} />
        <Route path="/grayTemplate" element={<GreyTemplate></GreyTemplate>} />
        <Route
          path="/templateDesign"
          element={<TemplateDesign></TemplateDesign>}
        />

        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
