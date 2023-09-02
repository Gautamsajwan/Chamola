import React, { useContext, useState } from 'react'
import AddImage from './AddImage'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

function CreateCourse() {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [Image, setImage] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const { auth } = useContext(AuthContext)
    console.log(auth)

    const navigate = useNavigate()

    const createCourse = async (e) => {
        e.preventDefault();

        try {
            const Coursedata = new FormData()
            Coursedata.append("title", title)
            Coursedata.append("description", description)
            Coursedata.append("thumbnail", Image)
            Coursedata.append("startDate", startDate)
            Coursedata.append("endDate", endDate)
            const response = await fetch('http://10.3.3.200:5000/api/courses/create-course', {
                method: 'POST',
                headers: {
                    'Authorization': `${auth?.token}`
                },
                body: Coursedata
            })

            const json = await response.json()

            if (json?.success) {
                navigate(`/dashboard/create-course/create-modules/${json?.Course?._id}`)
            }

        } catch (error) {
            console.log("Something went wrong");
        }
    }

    return (
        <div className='bg-[rgb(19, 24, 32)] text-white font-montserrat px-4 py-3 flex flex-col items-center gap-5 h-screen'>
            <h1 className='text-center font-bold text-2xl mt-2'>Create new course</h1>
            <form className='flex flex-col items-center gap-5 w-[400px]'>
                <input type="text" placeholder='title' className='bg-[rgb(56,57,58)] w-full indent-2 py-2' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea cols="30" rows="5" placeholder='description' className='bg-[rgb(56,57,58)] indent-3 py-2 -mt-[12px] w-full' value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
                <AddImage Image={Image} setImage={setImage} />
                <div className="flex flex-col gap-5">
                    <div>
                    <label htmlFor="start"> start-date </label>
                    <input type="date" className='ml-2 bg-gray-800 px-3 py-2 rounded-full' onChange={(e) => { setStartDate(e.target.value) }} />
                    </div>

                    <div>
                    <label htmlFor="start"> end-date </label>
                    <input type="date" className='ml-3 bg-gray-800 px-3 py-2 rounded-full' onChange={(e) => { setEndDate(e.target.value) }} />
                    </div>
                </div>
                <button onClick={createCourse} className='bg-green-400 px-4 py-3 rounded-xl'>Add Module</button>
            </form>
        </div>
    )
}

export default CreateCourse