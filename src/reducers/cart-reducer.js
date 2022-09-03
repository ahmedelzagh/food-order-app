export const manageCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // check if the meal id is already included in the cart
      const idsArray = state.map((item) => item.id);
      const isIdAdded = idsArray.includes(action.mealDetails.id);
      // If the meal is already in the cart, increase the amount by falling through to next case
      if (!isIdAdded) {
        return [...state, action.mealDetails];
      }
    // fall through
    case "INCREASE_AMOUNT":
      return state
        .map((item) => {
          if (item.id === action.mealDetails.id) {
            return { ...item, amount: item.amount + action.mealDetails.amount };
          } else {
            return item;
          }
        })
        .filter((item) => item.amount > 0);
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    case "DECREASE_AMOUNT":
      return state
        .map((item) => {
          if (item.id === action.mealDetails.id) {
            return { ...item, amount: item.amount - action.mealDetails.amount };
          } else {
            return item;
          }
        })
        .filter((item) => item.amount > 0);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};
