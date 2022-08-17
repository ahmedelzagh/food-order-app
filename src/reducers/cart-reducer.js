export const manageCartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return [...state, action.mealDetails];
      case "REMOVE_FROM_CART":
        return state.filter((item) => item.id !== action.id);
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