import { createContext, useState } from "react";
import { authService } from "../utils/main";

export const CustomerContext = createContext();

export default function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const authUser = async (credentials) => {
    try {
      const { user, token } = await authService(credentials);
      if (user && token) {
        setCustomer(user);
        setToken(token);
        setIsLoggedIn(true);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      setErrorMsg(error.message);
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
      value={{ authUser, isLoggedIn, customer, token, errorMsg, logout }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
