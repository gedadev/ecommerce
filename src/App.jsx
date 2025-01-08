import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </CartProvider>
  );
}

export default App;
