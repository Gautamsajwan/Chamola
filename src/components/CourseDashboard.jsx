import React, { useContext, useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import { CircularProgress } from '@mui/material'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import ModuleContent from './ModuleContent';
import FileSaver from 'file-saver'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Dropzone from './Dropzone'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

function CourseDashboard() {
  const [modules, setModules] = useState([])
  const [lessons, setLessons] = useState([])
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(false)
  const [pdfUrl, setPdfUrl] = useState("")
  const [pdf, setPdf] = useState("")
  const [click, setClick] = useState(true)
  const params = useParams()
  const {id} = params
  const {auth} = useContext(AuthContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const getAssignments = async (e) => {
    setClick(false)
    e.preventDefault()
    try {
      const response = await fetch(`http://10.3.3.200:5000/api/courses/get-assignment/${id}`, {
        method: "GET"
      })

      const data = await response.json()
      // console.log(data,assignments);
      setAssignments(data.assignments)
      // console.log(data.modules)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://10.3.3.200:5000/api/courses/get-modules/${id}`, {
          method: "GET"
        })

        const data = await response.json()
        // console.log(data.modules)
        setModules(data.modules)
      } catch (err) {
        console.error(err)
      }
    }

    getCourseDetails()
    setLoading(false)
  }, [])

  const submitPdf = async(id) => {
    console.log('id => ', id);
    try {
      const response = await fetch(`http://10.3.3.200:5000/api/courses/assignment/response/submit-assignment/${id}`, {
        method: 'POST',
        headers: {
          'authorization': `${auth?.token}`
        },
        body: pdf
      })
      const json = await response.json()
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  const weeks = modules.map((item, index) => (
    <li key={item._id} onClick={() => { handleModule(item._id) }} className="outline outline-[3px] rounded-full px-3 py-2 cursor-pointer">week {index + 1}</li>
  ))

  const handlePdf = async (id, fileName) => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/assignment/get-assignment-pdf/${id}`, {
        method: 'GET',
        headers: {
          'authorization': `${auth?.token}`
        }
      })
      const json = await response.json()
      setPdfUrl(json.pdfUrl);
    } catch (error) {
      console.log(error);
    }

    console.log(pdfUrl)

    FileSaver.saveAs(pdfUrl, fileName)
  }

  const assignment = assignments?.map((item) => (
    <div key={item._id} className="mb-4 px-5 py-4 font-montserrat font-bold bg-gray-800 rounded-lg cursor-pointer">
      <div key={item._id}>{item.title}</div>
      <div className="space-x-3 mt-2 mb-1">
        <button onClick={() => { handlePdf(item._id, item.fileName) }} className="px-3 py-2 w-32 rounded-lg bg-green-500">Download</button>
 
        <button className="px-3 py-2 w-32 rounded-lg bg-blue-500" onClick={handleOpen} variant="gradient">Upload</button>

        <Dialog open={open} item= {item}>
          <DialogHeader className="font-montserrat">Upload your assignment</DialogHeader>
          <DialogBody className="font-montserrat" divider>
          <Dropzone pdf={pdf} setPdf= {setPdf}/>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span className="font-montserrat">Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span className="font-montserrat" onClick={() => {submitPdf(item._id)}}>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <p className="text-end text-[14px] mt-2">DueDate : {item.duedate.substring(0, 10)}</p>
    </div>
  ))

  const handleModule = async (id) => {
    setClick(true)
    try {
      setLoading(true)
      const response = await fetch(`http://10.3.3.200:5000/api/courses/module/get-lessons/${id}`, {
        method: "GET"
      })

      const data = await response.json()
      setLessons(data.Lessons)
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  const courseContent = lessons.map(lesson => (
    <ModuleContent key={lesson._id} lesson={lesson} />
  ))

  return (
    <div className="w-full flex justify-end text-white">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="w-[30%] lg:w-[20%] h-screen p-3 space-y-3 fixed left-0 border-r-[5px] border-gray-800 text-white font-montserrat font-bold">
        {/* modules */}
        <ul className="space-y-3">
          <h1 className="px-10 py-2 rounded-full bg-blue-500 hover:translate-x-[2px] -translate-x-10 cursor-pointer transition duration-200 ease-in-out">Modules</h1>
          {weeks}
        </ul>
        <button onClick={getAssignments} className="w-full px-10 rounded-full bg-blue-500 hover:translate-x-[2px] -translate-x-10 transition duration-200 ease-in-out py-2 text-start cursor-pointer">Assignments</button>
      </div>

      <div className="w-[70%] lg:w-[80%] px-3 py-3">
        { click && courseContent}
        { !click && assignment}
      </div>
    </div>
  )
}

export default CourseDashboard