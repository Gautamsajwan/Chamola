import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import LoginGraphics from './LoginGraphics';

function SignUp() {
    const [userName, setUserName] = useState('')
    const [brandName, setBrandName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    const handleMouseDown = () => {
        setShowPassword(prev => !prev)
    };

    const handleMouseUp = () => {
        setShowPassword(prev => !prev)
    };

    const handleSignUp = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:5000/auth/createUser`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    email: email,
                    password: password,
                    brandName: brandName,
                })
            })

            const data = await response.json()

            if (data.success) {
                navigate("/dashboard")
                toast.success("successfully signed up")
                localStorage.setItem('brandName', brandName.toLowerCase())
            } else {
                toast.error(data.msg)
            }
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    const handleClick = () => {
        navigate("/login")
    }

    return (
        <div className="text-white relative h-screen overflow-hidden font-montserrat flex flex-col justify-center items-center">
            <LoginGraphics />
            <div className="p-8 rounded-lg bg-gray-800/30">
                <form className='flex flex-col gap-2 w-[500px]'>
                    <label htmlFor="username" className="font-bold pl-1">UserName</label>
                    <input type="text" id="username" value={userName} onChange={e => setUserName(e.target.value)} className="textField" placeholder='enter your email' />

                    <label htmlFor="email" className="font-bold pl-1 mt-2">Email</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="textField" placeholder='enter your email' />

                    <label htmlFor="password" className="pl-1 font-bold mt-2">Password </label>
                    <div className="relative flex flex-col">
                        <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={e => setPassword(e.target.value)} className="textField" placeholder='enter your password' />
                        <BsEye onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} className="absolute right-4 text-xl cursor-pointer top-1/2 -translate-y-1/2" />
                    </div>

                    <h2 className="font-bold pl-1 mt-2">Role</h2>
                    <div className="flex gap-5 font-bold px-5 py-3 -mt-1 bg-gray-700/40 rounded-lg">
                        <div className="flex gap-2">
                            <input type="radio" id="student" name="role" className="textField cursor-pointer"/>
                            <label htmlFor="student" className="cursor-pointer">Student</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" id="teacher" name="role" className="textField cursor-pointer"/>
                            <label htmlFor="teacher" className="cursor-pointer">Teacher</label>
                        </div>
                    </div>

                    <button onClick={handleSignUp} className="mt-4 rounded-full w-[60%] m-auto font-bold px-10 py-2 outline outline-blue-500 hover:bg-blue-400 active:scale-95 transition duration-200 ease-in-out">Sign Up</button>
                </form>
                <button onClick={handleClick} className="mt-5 w-full font-bold px-3 py-2 rounded-lg bg-gray-700/30">Already a user ?</button>
            </div>
        </div>
    )
}

export default SignUp