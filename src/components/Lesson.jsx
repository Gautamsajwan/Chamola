import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Addvideo from './AddVideo'
import { AuthContext } from '../Contexts/AuthContext'

export default function Lesson() {
    // 64f0b458ea1957fc5dc30366
    const [title, setTitle] = useState('')
    const [video, setvideo] = useState('')
    const params = useParams()
    const {id} = params
    const navigate = useNavigate()
    const {auth} = useContext(AuthContext)

    const createLesson = async (e) => {
        e.preventDefault()
        try {
            const Lessondata = new FormData()
            Lessondata.append("title", title)
            Lessondata.append("video", video)
            const response = await fetch(`http://10.3.3.200:5000/api/courses/module/lesson/create-Lesson/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `${auth?.token}`
            },
            body: Lessondata
            })

            const json = await response.json()
            console.log(json);
            if(json?.success) {
                navigate(`/dashboard/create-course/create-modules/create-lessons/create-description/${json?.Lesson?._id}`)
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
    <div className='bg-[rgb(19,24,32)] text-white font-montserrat flex flex-col items-center h-screen'>
        <h1 className='text-center pt-5 pb-5 font-bold text-2xl mt-2'>Create a Lesson</h1>
        <form className='flex flex-col justify-center items-center gap-9'>
            <input type="text" placeholder='title' value={title} onChange={(e) => {setTitle(e.target.value)}} className='text-white bg-gray-800 w-full indent-2 py-2'/>
            <Addvideo video={video} setvideo={setvideo}/>
            <button onClick={createLesson} className="bg-green-400 px-4 py-3 rounded-lg">Add Description</button>
        </form>
    </div>
  )
}