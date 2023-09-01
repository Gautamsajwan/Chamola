import React, { useEffect, useState } from 'react'
import StudyContent from './studyContent'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {BiVideo} from 'react-icons/bi'
import { AiOutlineFileText } from 'react-icons/ai';

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function ModuleContent({ lesson }) {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const { title, video } = lesson
    const [description, setDescription] = useState([])

    const fetchDescription = async () => {
        try {
            const response = await fetch(`http://10.3.3.200:5000/api/courses/module/lesson/get-description-video/${lesson._id}`, {
                method: 'GET',
            })

            const data = await response.json()
            setDescription(data.description)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="font-montserrat w-full" onClick={fetchDescription}>
            <Accordion open={open === 1} icon={<Icon id={1} open={open}/>} className="w-full">
                <AccordionHeader onClick={() => handleOpen(1)} className="w-full pb-2 border-b-[4px] hover:text-blue-300 hover:border-blue-300 flex justify-start font-montserrat capitalize font-bold tracking-wider text-gray-200">
                    <h3>{title}</h3>
                    {video ? <BiVideo className="text-blue-400 text-4xl bg-gray-800 rounded-full p-[5px] ml-2 -translate-y-1" /> : <AiOutlineFileText className="text-lime-400 text-4xl bg-gray-800 rounded-full p-[5px] ml-2 -translate-y-1" />}
                </AccordionHeader>
                <AccordionBody className="bg-gray-800 px-2 py-1 mt-2 rounded-lg">
                    <StudyContent description={description} videoSource={video?.assetURL} />
                </AccordionBody>
            </Accordion>
        </div>
    )
}

export default ModuleContent