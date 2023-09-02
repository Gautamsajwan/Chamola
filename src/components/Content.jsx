import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

export default function Content() {
    const [heading, setheading] = useState('')
    const [explanation, setexplanation] = useState('')
    const params = useParams()
    const { id } = params
    const navigate = useNavigate()
    const { auth } = useContext(AuthContext)

    const createContent = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://10.3.3.200:5000/api/courses/module/lesson/content/create-Content/${id}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `${auth?.token}`
                },
                body: JSON.stringify({ heading, explanation })
            })

            const json = await response.json()
            console.log(json);
            if (json?.success) {
                setheading('')
                setexplanation('')
                console.log('content created successfully');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const gotoHome = (e) => {
        e.preventDefault()
        navigate('/home')
    }


    return (
        <div className='bg-[rgb(19,24,32)] text-white h-screen flex flex-col items-center font-montserrat'>
            <h1 className='text-center pt-5 pb-5 text-2xl font-bold mt-2'>Create a Content</h1>
            <form className='flex flex-col justify-center items-center gap-5'>
                <input type="text" placeholder='heading' value={heading} onChange={(e) => { setheading(e.target.value) }} className='text-white bg-gray-800 indent-2 py-2 w-full' />
                <textarea cols="30" rows="5" placeholder='explanation' className='bg-[rgb(56,57,58)] indent-3 py-2 -mt-[5px] w-full' value={explanation} onChange={(e) => { setexplanation(e.target.value) }}></textarea>
                <button onClick={createContent} className="bg-green-400 w-full px-4 py-3 rounded-lg">Add More Content</button>
                <button onClick={gotoHome} className="bg-red-400 w-full px-4 py-3 rounded-lg">Finish</button>
            </form>
        </div>
    )
}