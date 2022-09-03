import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(+e.target.value);
  };
  const resetInput = () => setValue(initialValue);

  return [
    {
      value,
      onChange,
    },
    resetInput,
  ];
};

export default useInput;
