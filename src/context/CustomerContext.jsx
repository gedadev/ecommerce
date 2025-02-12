import { createContext, useEffect, useState } from "react";
import { authService, getUserData } from "../utils/main";

export const CustomerContext = createContext();

export default function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [paymentMethods, setPaymentsMethods] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isLoggedIn) {
        const userData = await getUserData(token);
        setOrders(userData.orders);
        setAddresses(userData.addresses);
        setPaymentsMethods(userData.paymentMethods);
      }
    };

    fetchUserData();
  }, [isLoggedIn, token]);

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
        orders,
        addresses,
        paymentMethods,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
