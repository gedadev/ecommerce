import { createContext, useState } from "react";
import { serverURL } from "../utils/main";

export const CustomerContext = createContext();

export default function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const authUser = (user) => {
    try {
      fetch(`${serverURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          setCustomer(data.user);
          setToken(data.token);
          setIsLoggedIn(true);
        });
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
