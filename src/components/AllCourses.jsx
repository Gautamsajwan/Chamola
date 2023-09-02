import React, { useEffect, useState } from 'react'
import Course from './Course'

function AllCourses() {
    const [allCourses, setAllCourses] = useState([])
    useEffect(() => {
        const getAllcourses = async () => {
            try {
                const response = await fetch(`http://10.3.3.200:5000/api/courses/get-all-courses`, {
                    method: 'GET',
                })

                const data = await response.json()
                console.log("data", data.Courses)
                setAllCourses(data.Courses)
            } catch (error) {
                console.error(err)
            }
        }

        getAllcourses()
    }, [])

    const courses = allCourses.map(course => (
        <Course key={course._id} details={course} />
    ))

    return (
        <div className="grid grid-cols-1 my-2 lg:grid-cols-2 gap-4 px-3 py-2 w-full max-w-[1200px] mx-auto">
            {courses}
        </div>
    )
}

export default AllCourses