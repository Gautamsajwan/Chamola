import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

function Module() {
    // 64f0b458ea1957fc5dc30366
    const [title, settitle] = useState('')
    const params = useParams()
    const {id} = params
    const navigate = useNavigate()
    const {auth} = useContext(AuthContext)

    // const getCourse = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/courses/single-course/${id}`, {
    //         method: 'GET',
    //         })

    //         const json = await response.json()
    //         console.log(json);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const createModules = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://10.3.3.200:5000/api/courses/module/create-Module/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `${auth?.token}`
            },
            body: JSON.stringify({title})
            })

            const json = await response.json()
            console.log(json);
            if(json?.success) {
                navigate(`/dashboard/create-course/create-modules/create-lessons/${json?.Module?._id}`)
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
    <div className='bg-[rgb(19,24,32)] text-white font-montserrat h-screen flex flex-col'>
        <h1 className='text-center pt-5 pb-5 font-bold text-2xl mt-2'>Create a module</h1>
      <form className='flex flex-col justify-center items-center gap-4'>
        <input type="text" placeholder='title' value={title} onChange={(e) => {settitle(e.target.value)}} className='text-white bg-gray-800 px-3 py-2'/>
        <button onClick={createModules} className="bg-green-400 px-4 py-2 rounded-lg">Add Lesson</button>
      </form>
    </div>
  )
}

export default Module