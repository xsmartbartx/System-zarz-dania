import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';  
import Główna from './pages/uczniowie/Główna.jsx';
import CourseList from './pages/uczniowie/CourseList.jsx';
import CourseDetails from './pages/uczniowie/CourseDetails.jsx';
import Zapisy from './pages/uczniowie/MyEnrollments.jsx';
import Osoba from './pages/uczniowie/Osoba.jsx';
import Ładowanie from './components/uczniowie/Loading.jsx';
import Nauczyciel from './pages/nauczyciel/Nauczyciel.jsx';
import Panel from './pages/nauczyciel/Panel.jsx';
import DodajKurs from './pages/nauczyciel/DodajKurs.jsx';
import MojeKursy from './pages/nauczyciel/MojeKursy.jsx';
import ZapisyStudentów from './pages/nauczyciel/ZapisyStudentów.jsx';
import Navbar from './components/nauczyciel/Navbar.jsx';
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from 'react=toastify';

const App = () => {

  const isNauczycielRoute = useMatch('/nauczyciel/*');

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer />
      {!isNauczycielRoute && <Navbar />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Główna />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/zapisy' element={<Zapisy />} />
        <Route path='/osoba/course:id' element={<Osoba />} />
        <Route path='/loading/:path' element={<Ładowanie />} />
        <Route path='/nauczyciel' element={<Nauczyciel />} />
          <Route path='/nauczyciel' element={<Panel />} />
          <Route path='/dodaj-kurs' element={<DodajKurs />} />
          <Route path='/moje-kursy' element={<MojeKursy />} />
          <Route path='/zapisy-studentów' element={<ZapisyStudentów />} />
          

      </Routes>
    </div>
  );
};

export default App;