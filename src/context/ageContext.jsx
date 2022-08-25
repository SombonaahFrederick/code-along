import { createContext } from "react";

// Number One
export const AgeContext = createContext({
  age: 0,
});

// Number Two
export const AgeContextProvider = ({ children }) => {
  return (
    <AgeContext.Provider value={{ name: 20 }}>{children}</AgeContext.Provider>
  );
};
