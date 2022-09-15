import { useState } from "react";

// hook for handling user inputs,
// takes the initial value/state of the input as a first argument,
// and the validation rule that verifies if the value is valid or not,
// returns an array that consists of 2 objects and a reset Fn,
// spread the first object directly as properties for the input element,
// second object can be used to check the validity of the input value, and to give a feedback to the form state,

const useInput = (initialState, validationRule) => {
  const [value, setValue] = useState(initialState);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationRule(value) || false;
  const inputIsInvalid = !valueIsValid && isTouched;

  const onChange = (e) => {
    if (e.target.type === "number") {
      setValue(+e.target.value);
    } else {
      setValue(e.target.value);
    }
  };
  const onBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue(initialState);
    setIsTouched(false);
  };

  return [{ value, onChange, onBlur }, { valueIsValid, inputIsInvalid }, reset];
};

export default useInput;
