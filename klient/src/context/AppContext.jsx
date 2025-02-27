import { createContext } from "react";  

export const AppContext = createContext(); 

export const AppProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const value = {
        
    };

    return (
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    );

}