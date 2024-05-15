import { useState } from "react";
import { createContext, useContext } from "react";

export const LoginContext = createContext();

export function useLoginContext() {
  return useContext(LoginContext);
}

const LoginContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showReset, setShowReset] = useState(false);
  return (
    <LoginContext.Provider
      value={{
        showLogin,
        setShowLogin,
        setShowRegister,
        showRegister,
        showContact,
        setShowContact,
        setShowLogout,
        showLogout,
        setShowReset,
        showReset,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
