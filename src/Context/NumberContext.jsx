import React, { createContext, useState } from "react";

export const NumberContext = createContext();
export const NumberContextProvider = ( { children }) => {
  const [num, setName] = useState(4);
    const handleChange = (value) => {
        setName(value+num);
    }
  return <NumberContext.Provider value={{num, handleChange}}>{children}</NumberContext.Provider>;
};
