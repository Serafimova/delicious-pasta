import { createContext, useContext } from "react";
import useLocalStorageHook from "../hooks/useLocalStorageHook";

const AuthContext = createContext();

const initialAuthState = {
  _id: "",
  email: "",
  accessToken: "",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorageHook('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{user, login, logout, isAuthenticated: user.accessToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authState = useContext(AuthContext);
  return authState;
};
