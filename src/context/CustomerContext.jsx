import { createContext, useEffect, useState } from "react";
import { authService, getUserData } from "../utils/main";
import { BiLogoVisa } from "react-icons/bi";
import { BiLogoMastercard } from "react-icons/bi";
import { FaCcAmex } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const customer = localStorage.getItem("customer");

    if (token && customer) {
      setToken(token);
      setCustomer(JSON.parse(customer));
      setIsLoggedIn(true);
    }
  }, []);

  const authUser = async (credentials) => {
    setErrorMsg("");
    try {
      const { user, token } = await authService(credentials);
      if (user && token) {
        setCustomer(user);
        setToken(token);
        setIsLoggedIn(true);

        localStorage.setItem("token", token);
        localStorage.setItem("customer", JSON.stringify(user));
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

  const selectProviderLogo = (provider) => {
    switch (provider) {
      case "visa":
        return <BiLogoVisa />;
      case "mastercard":
        return <BiLogoMastercard />;
      case "amex":
        return <FaCcAmex />;
      default:
        return <CiCreditCard1 />;
    }
  };

  const hideCardNumber = (number) => {
    const ending = number.slice(-4);
    const hidden = "•".repeat(12).concat(ending);
    const formattedHidden = hidden.match(/.{1,4}/g).join(" ");

    return { formattedHidden, ending };
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
        selectProviderLogo,
        hideCardNumber,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
