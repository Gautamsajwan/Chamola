import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import brandLogo from '../assets/brandLogoFavicon.png'
import { Link } from 'react-router-dom'
import BackgroundLines from './BackgroundLines'
import Lottie from "lottie-react"
import floatingGuy from '../lotties/animation_llvy3ppe.json'


function LandingPage() {
    const [text] = useTypewriter({
        words: ["Streamline Creativity", "Discover, Organize, Collaborate", "Your Ultimate Learning Companion"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className="relative text-white font-montserrat font-bold h-screen flex flex-col items-center justify-center space-y-[2.5rem] overflow-hidden">
            <BackgroundLines />
            <div className="p-4 flex flex-col items-center tablet:flex-row w-full gap-5">
                <div className="tablet:w-1/2 flex justify-end items-center">
                    <Lottie animationData={floatingGuy} className="w-[380px] tablet:w-[450px]" loop={true} />
                </div>
                <div className="tablet:w-1/2 w-full flex items-center tablet:items-start flex-col justify-center gap-5">
                    <div className="relative w-32 h-32 rounded-full ">
                        <img
                            src={brandLogo}
                            alt="Picture of the author"
                            className="rounded-full w-full h-full object-cover animate-pulse"
                        />
                        <div className="absolute top-0 left-0 rounded-full w-full h-full bg-[#08AEEA] bg-gradient-to-r from-[#08AEEA] to-[#782af5] -z-10 blur-[50px]"></div>
                    </div>
                    <div className="z-20 w-full flex flex-col items-center tablet:items-start">
                        <h1 className="pb-4 text-2xl uppercase tracking-[15px] text-[#75a5ff]">Learnify</h1>
                        <h1 className="tracking-wide text-4xl text-center tablet:text-start">
                            <span>{text}</span>
                            <Cursor cursorColor='gray' />
                        </h1>
                    </div>
                </div>
            </div>
            
            <div className="relative group">
                <Link to="/signUp"><button className="px-7 py-3 outline rounded-full hover:bg-blue-500 hover:outline-blue-600 transition ease-in-out z-20">Get Started</button></Link>
                <div className="w-1/2 h-[3px] bg-white absolute top-1/2 -left-16 group-hover:-translate-x-7 transition ease-in-out"></div>
                <div className="w-1/2 h-[3px] bg-white absolute top-1/2 -right-16 group-hover:translate-x-7 transition ease-in-out"></div>
            </div>
        </div>
    )
}

export default LandingPage