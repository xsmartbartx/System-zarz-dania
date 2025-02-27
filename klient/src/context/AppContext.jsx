import { createContext, useEffect } from "react";  
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext(); 

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const [allCourses, setAllCourses] = useState([]);

    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/courses');
            const data = await response.json();
            setAllCourses(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = { currency, allCourses, fetchAllCourses };

    return (
        <AppContext.Provider value={{value}}>
            {props.children}
        </AppContext.Provider>
    );

}