import { createContext } from "react";  

export const AppContext = createContext(); 

export const AppProvider = (props) => {

    const value = {
        
    };

    return (
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    );

}