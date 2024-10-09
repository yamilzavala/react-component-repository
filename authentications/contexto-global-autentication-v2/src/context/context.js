import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext("");

export const useAuthenticationContext = () => useContext(AuthenticationContext);

export default AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const valuesToSahre = {
    user,
    login,
    logout,
  };

  return (
    <AuthenticationContext.Provider value={valuesToSahre}>
      {children}
    </AuthenticationContext.Provider>
  );
};
