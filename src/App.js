import { useState } from "react";

import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsTeaser from "./Components/Meals/MealsTeaser";
import Cart from "./Components/ShoppingCart/Cart";

import CartProvider from "./store/CartProvider";

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
      {showCart && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <MealsTeaser />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
