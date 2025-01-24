import { createContext, useState } from "react";
import { authService } from "../utils/main";

export const CustomerContext = createContext();

export default function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const authUser = async (credentials) => {
    setErrorMsg("");
    try {
      const { user, token } = await authService(credentials);
      if (user && token) {
        setCustomer(user);
        setToken(token);
        setIsLoggedIn(true);
      }
    } catch {
      setErrorMsg("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setCustomer(null);
    setToken(null);
    setIsLoggedIn(false);
  };

  return (
    <CustomerContext.Provider
      value={{
        authUser,
        isLoggedIn,
        customer,
        token,
        errorMsg,
        logout,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
