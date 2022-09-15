import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import Header from "./Components/Layout/Header";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Cart from "./Components/ShoppingCart/Cart";
import Checkout from "./views/Checkout";

function App() {
  const cartWasOpen = localStorage.getItem("cartIsOpen");
  const [showCart, setShowCart] = useState(cartWasOpen);
  const showCartHandler = () => {
    setShowCart(true);
    localStorage.setItem("cartIsOpen", true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
    localStorage.removeItem("cartIsOpen");
  };

  return (
    <CartProvider>
      <Router>
        {showCart && <Cart onHide={hideCartHandler} />}
        <Header onShow={showCartHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
