import React, { useContext } from "react";
import { NumberContext } from "../Context/NumberContext";

export const Dawn = () => {
  const { handleChange } = useContext(NumberContext);
  return (
    <div>
      <button onClick={() => handleChange(1)}>Increment</button>
    </div>
  );
};
