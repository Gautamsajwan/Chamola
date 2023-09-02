import React from "react"
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CourseDashboard from "./components/CourseDashboard";
import AllCourses from "./components/AllCourses";
import Photo from './components/Photo';
import CreateCourse from "./components/CreateCoures";
import Module from "./components/Moduls";
import Lesson from "./components/Lesson";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/SignUp' element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile' element={<Photo />} />
        <Route exact path='/home' element={[<Navbar key="navbar" />, <Home key="home" />]} />
        <Route exact path='/courseInfo/:id' element={[<CourseDashboard />]} />
        <Route exact path='/getCourses' element={[<AllCourses />]} />
        <Route exact path='/dashboard/create-course' element={<CreateCourse/>}/>
        <Route exact path='/dashboard/create-course/create-modules/:id' element={<Module/>}/>
        <Route exact path='/dashboard/create-course/create-modules/create-lessons/:id' element={<Lesson/>}/>
        <Route exact path='/dashboard/create-course/create-modules/create-lessons/create-description/:id' element={<Content/>}/>
      </Routes>
    </div>
  )
}

export default App
