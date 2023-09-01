import React from "react"
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CourseDashboard from "./components/CourseDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/SignUp' element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={[<Navbar key="navbar" />, <Home key="home" />]} />
        <Route exact path='/courseInfo' element={[<CourseDashboard key="courseDashboard" />]} />
        {/* <Route exact path='/upload' element={[<Navbar key="navbar" />, <FileUploader key="fileuploader" />]} />
        <Route exact path='/about' element={[<Navbar key="navbar" />, <About key="about" />]} />
        <Route exact path='/editImage/:imageId' element={[<Navbar key="navbar" />, <ImageEdit key="image-edit" />]} />
        <Route exact path='/dashboard' element={[<Navbar key="navbar" />, <Dashboard key="dashboard" />]} /> */}
      </Routes>
    </div>
  )
}

export default App
