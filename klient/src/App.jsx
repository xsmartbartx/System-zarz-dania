import { Route, Routes, useMatch } from 'react-router-dom';  
import Main from './pages/students/Main.jsx';
import CourseList from './pages/students/CourseList.jsx';
import CourseDetails from './pages/students/CourseDetails.jsx';
import MyEnrollments from './pages/students/MyEnrollments.jsx';
import Player from './pages/students/Player.jsx';
// Removed duplicate import of Loading
import Educator from './pages/educator/Educator.jsx';
import Panel from './pages/educator/Panel.jsx';
import AddCourse from './pages/educator/AddCourse.jsx';
import MyCourses from './pages/educator/MyCourses.jsx';
import StudentsEnrollments from './pages/educator/StudentsEnrollments.jsx';
import Navbar from './components/educator/Navbar.jsx';
import "quill/dist/quill.snow.css";
import { ToastContainer } from 'react=toastify';
import Loading from './components/students/Loading.jsx';

const App = () => {

  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer />
      {!isEducatorRoute && <Navbar />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/course:id' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />} />
          <Route path='/educator' element={<Panel />} />
          <Route path='/add-course' element={<AddCourse />} />
          <Route path='/my-courses' element={<MyCourses />} />
          <Route path='/students-enrollements' element={<StudentsEnrollments />} />
          

      </Routes>
    </div>
  );
};

export default App;