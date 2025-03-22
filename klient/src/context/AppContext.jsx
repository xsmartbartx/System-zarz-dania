import { createContext, useState, useEffect } from "react";  
import { dummyCourses } from "../assets/assets";
import { data, useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration';
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext(); 

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const {getToken} = useAuth()
    const {user} = useUser()

    const [allCourses, setAllCourses] = useState([]);
    const [isNauczyciel, setIsNauczyciel] = useState(true);
    const [isZapisany, setIsZapisany] = useState([]);

    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
        try {
            const {data} = await axios.get(backendUrl + '/api/course/all');

            if(data.success){
                setAllCourses(data.courses)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(data.message)
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

    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, { units: ['g', 'm'],});
    }

    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lecture)=>
            time += lecture.lectureDuration));
        return humanizeDuration(time * 60 * 1000, { units: ['g', 'm'],});
    }

    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter) => {
            if (Array.isArray(chapter.chapterContent))
                {totalLectures += chapter.chapterContent.length}
        };
        return totalLectures;
    }


    const fetchUserZapisanyCourses = async () => {
        setZapisanyCourses(dummyCourses);
    }

    useEffect(() => {
        fetchAllCourses();
        fetchUserZapisanyCourses();
    }, [])

    const logToken = async ()=>{
        console.log(await getToken());
    }

    useEffect(()=>{
        if(user){
            logToken()
        }
    },[user])

    const value = {
        currency, allCourses, navigate, fetchAllCourses, calculateRating,
        isNauczyciel, setIsNauczyciel, calculateChapterTime, calculateCourseDuration,
        calculateNoOfLectures, zapisanyCourses, fetchUserZapisanyCourses, isZapisany,
        setIsZapisany};

    return (
        <AppContext.Provider value={{value}}>
            {props.children}
        </AppContext.Provider>
    );

}