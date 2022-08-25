import { createContext, useContext } from "react";

// Number One
export const NameContext = createContext({
    name: "Name not provided",
});

// Number Two
export const NameContextProvider = ({children}) => {
    return(
        <NameContext.Provider value={{ name: "John Doe"}}>
           {children}
        </NameContext.Provider>
    )
}

export const useNameContext = () => useContext(NameContext);