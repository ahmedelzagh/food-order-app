import { useState, useReducer, useEffect } from "react";

import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsTeaser from "./Components/Meals/MealsTeaser";
import Cart from "./Components/ShoppingCart/Cart";

import { manageCartReducer } from "./reducers/cart-reducer";
import CartContext from "./store/cart-context";

function App() {
  // Get and convert the last item in the cart from localStorage to an array of objects.
  const cartItemsLocal = JSON.parse(localStorage.getItem("cartItems"));
  // Set the cartItems state to the cartItemsLocal state if it is not empty.
  const [cartItems, dispatchCart] = useReducer(manageCartReducer, [], () => {
    return cartItemsLocal;
  });

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

  // Store the cart items in the local storage after 0.3s from the last change happened in the cart.
  useEffect(() => {
    const cartRefreshTimer = setTimeout(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, 300);
    return () => {
      clearTimeout(cartRefreshTimer);
    };
  }, [cartItems, showCart]);

  return (
    <CartContext.Provider value={{ cartItems: cartItems, dispatchCart: dispatchCart, onAddToCart: addToCartHandler }}>
      {showCart && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <MealsTeaser />
      <AvailableMeals />
    </CartContext.Provider>
  );
}

export default App;
