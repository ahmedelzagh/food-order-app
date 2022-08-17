import { useState } from "react";

import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsTeaser from "./Components/Meals/MealsTeaser";
import Cart from "./Components/ShoppingCart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const addToCartHandler = (mealDetails) => {
    const idsArray = cartItems.map((item) => item.id);
    const isIdAdded = idsArray.includes(mealDetails.id);
    // If the meal is already in the cart, increase only the amount.
    if (isIdAdded) {
      const newCartItems = cartItems
        .map((item) => {
          if (item.id === mealDetails.id) {
            return { ...item, amount: item.amount + mealDetails.amount };
          } else {
            return item;
          }
        })
        .filter((item) => item.amount > 0);
      setCartItems(newCartItems);
    } else {
      // If the meal is not in the cart, add it to the cart.
      setCartItems([...cartItems, { ...mealDetails }]);
    }
  };

  return (
    <>
      {showCart && <Cart onHide={hideCartHandler} cartItems={cartItems} />}
      <Header onShow={showCartHandler} cartItems={cartItems} />
      <MealsTeaser />
      <AvailableMeals onAddToCart={addToCartHandler} />
    </>
  );
}

export default App;
