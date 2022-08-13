import { useState } from "react";

import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsTeaser from "./Components/Meals/MealsTeaser";
import Cart from "./Components/ShoppingCart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <MealsTeaser />
      <AvailableMeals />
    </>
  );
}

export default App;
