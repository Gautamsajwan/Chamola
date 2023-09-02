import React from 'react'

function StudyContent({ description, videoSource }) {
    const desc = description?.map(desc => (
        <span key={desc._id} className="block font-montserrat text-gray-200">
            <span className="block font-bold text-lg mb-1">{desc.heading}</span>
            <span className="block text-md">{desc.explanation}</span>
        </span>
    ))
    return (
        <div className="p-1 py-[7px]">
            {videoSource && <video className="w-[80%] mx-auto rounded-lg mb-3" controls>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
            <p className="pl-1">{desc}</p>
        </div>
    )
}

export default StudyContent