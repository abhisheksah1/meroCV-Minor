import { useState } from "react";
import { createContext, useContext } from "react";

// Create a context for managing login-related state
export const LoginContext = createContext();

// Custom hook to access the login context values
export function useLoginContext() {
  return useContext(LoginContext);
}

// Component to provide the login context to its children
const LoginContextProvider = ({ children }) => {
  // State variables for managing various login-related states
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Provide the context values to the children components
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
        showFeedback,
        setShowFeedback,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
