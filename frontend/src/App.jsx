import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import { Toaster } from "react-hot-toast";
import CvTemplate from "./pages/Templates/CvTemplate";
import GreyTemplate from "./pages/templateForm/GreyTemplate";
import ResetPassword from "./pages/ResetPassword";
import TemplateDesign from "./pages/TemplateDesign";
import Footer from "../src/components/footer/Footer";
import Login from "./components/login/Login";
import SignUp from "./components/register/SignUp";
import Contact from "./components/contact/Contact";
import Logout from "./components/logout/Logout";
import ForgotPass from "./components/forgotPass/ForgotPass";
import FeedbackForm from "./components/feedback/FeedbackForm";
import ProfilePage from "../src/pages/userProfile/ProfilePage";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Toaster />
      <Navbar />
      <Login />
      <SignUp />
      <Contact />
      <Logout />
      <ForgotPass />
      <FeedbackForm />

      <AnimatePresence exitBeforeEnter={false}>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <AnimatedRoute>
                {" "}
                <Home />
              </AnimatedRoute>
            }
          />

          <Route
            path="/cvtemp"
            element={
              <AnimatedRoute>
                <CvTemplate />
              </AnimatedRoute>
            }
          />
          <Route
            path="/grayTemplate"
            element={
              <AnimatedRoute>
                <GreyTemplate />
              </AnimatedRoute>
            }
          />
          <Route
            path="/templateDesign"
            element={
              <AnimatedRoute>
                <TemplateDesign />
              </AnimatedRoute>
            }
          />

          <Route
            path="/updateProfile"
            element={
              <AnimatedRoute>
                <ProfilePage />
              </AnimatedRoute>
            }
          ></Route>

          <Route
            path="/reset-password/:token"
            element={
              <AnimatedRoute>
                <ResetPassword />
              </AnimatedRoute>
            }
          />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

const AnimatedRoute = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
    key={location.pathname}
    initial={{ x: "-100vw", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: "100vw", opacity: 0 }}
    transition={{ duration: 0.8, ease: "backOut" }}
  >
    {children}
  </motion.div>
  );
};




export default App;
