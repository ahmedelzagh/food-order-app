import { useState, useReducer, useEffect } from "react";

import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsTeaser from "./Components/Meals/MealsTeaser";
import Cart from "./Components/ShoppingCart/Cart";

import { manageCartReducer } from "./reducers/cart-reducer";

function App() {
  // Get and convert the last item in the cart from localStorage to an array of objects.
  const cartItemsLocal = JSON.parse(localStorage.getItem("cartItems"));
  // Set the cartItems state to the cartItemsLocal state if it is not empty.
  const [cartItems, dispatchCart] = useReducer(manageCartReducer, [], () => {
    return cartItemsLocal;
  });

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
      dispatchCart({ type: "INCREASE_AMOUNT", mealDetails: mealDetails });
    } else {
      // If the meal is not in the cart, add it to the cart.
      dispatchCart({ type: "ADD_TO_CART", mealDetails: mealDetails });
    }
  };

  // Store the cart items in the local storage.
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      {showCart && <Cart onHide={hideCartHandler} cartItems={cartItems} dispatchCart={dispatchCart} />}
      <Header onShow={showCartHandler} cartItems={cartItems} />
      <MealsTeaser />
      <AvailableMeals onAddToCart={addToCartHandler} />
    </>
  );
}

export default App;
