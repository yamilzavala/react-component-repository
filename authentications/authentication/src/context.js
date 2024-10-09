import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const valuesToShare = {
    isAuthenticated,
    login,
    logout,
  };
  return (
    <LoginContext.Provider value={valuesToShare}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
