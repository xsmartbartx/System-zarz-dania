import { createContext, use, useEffect } from "react";  
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext(); 

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);
    const [isNauczyciel, setIsNauczyciel] = useState(true);

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

    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        });
        return totalRating / course.courseRatings.length;
    };

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = { currency, allCourses, navigate, fetchAllCourses, calculateRating, isNauczyciel, setIsNauczyciel };

    return (
        <AppContext.Provider value={{value}}>
            {props.children}
        </AppContext.Provider>
    );

}