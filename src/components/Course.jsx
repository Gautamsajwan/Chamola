import React from 'react'
import { useNavigate } from 'react-router-dom'

function Course({ details }) {
    const { title, thumbnail, description } = details
    const navigate = useNavigate()
    return (
        <div className="col-span-1 mx-auto flex items-start px-3 py-3 gap-2 text-white font-montserrat bg-[rgb(44,45,46)] rounded-lg overflow-hidden cursor-pointer" onClick={() => { navigate(`/courseInfo/${details._id}`) }}>
            <div className="w-1/2 h-full rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={thumbnail.assetURL} alt="" />
            </div>
            <div className="w-1/2 px-2 flex flex-col items-start">
                <h1 className="font-bold">{title}</h1>
                <p>{description}</p>
                <div className="bg-gray-900 px-4 py-3 mt-[58px] rounded-md flex flex-col">
                    <small> <strong>StartDate</strong> : {details.startDate}</small>
                    <small> <strong>EndDate</strong> : {details.startDate}</small>
                </div>
            </div>
        </div>
    )
}

export default Course