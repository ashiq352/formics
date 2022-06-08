import React, { useContext } from "react";
import { NumberContext } from "../Context/NumberContext";

export const Carlos = () => {
  const { num } = useContext(NumberContext);
  return( 
  <div>Number is {num}</div>);
};
