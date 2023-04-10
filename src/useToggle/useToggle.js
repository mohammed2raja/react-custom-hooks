import { useState } from "react";

function useToggle(defaultValue) {
  const [value, setToggle] = useState(defaultValue);

  function toggleValue(value) {
    console.log("toggleValue");
    setToggle((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }
  return [value, toggleValue];
}

export default useToggle;
