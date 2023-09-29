import { useState } from "react";

function useBoolean(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const onToggle = () => setValue((prev) => !prev);
  const onValue = () => {
    const result = prompt("value");

    if (result === "true") {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return {
    value,
    setTrue,
    setFalse,
    onToggle,
    onValue,
  };
}

export default useBoolean;
