import React from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ variant }) => {
  const theme = `${classes["loading-spinner"]} ${variant ? classes[variant] : ""}`;
  return (
    <div className={classes["spinner-container"]}>
      <div className={theme}></div>
    </div>
  );
};
export default LoadingSpinner;
