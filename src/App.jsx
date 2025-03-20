import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import CartProvider from "./context/CartContext";
import CustomerProvider from "./context/CustomerContext";

function App() {
  return (
    <CustomerProvider>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </CustomerProvider>
  );
}

export default App;
