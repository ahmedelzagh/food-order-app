import React from "react";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";

import mealsIMG from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCart onClick={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsIMG} alt="meals on a table" />
      </div>
    </>
  );
};

export default Header;
