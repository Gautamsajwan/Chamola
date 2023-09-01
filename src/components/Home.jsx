import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Lottie from "lottie-react"
import rocket from '../lotties/rocket.json'
import boyStudying from '../lotties/animation_llxjl3h5.json'
import ImageSlider from './ImageSlider'
// import Footer from './Footer'
import HeroGraphics from './HeroGraphics'
import { Link } from 'react-router-dom'

function Home() {
  const [text] = useTypewriter({
    words: ["Streamline Creativity", "Discover, Organize, Collaborate", "Your Ultimate Learning Companion"],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="relative snap-y snap-mandatory h-screen overflow-y-scroll font-montserrat">
      <HeroGraphics />
      <section id="hero" className="relative snap-center w-full max-w-[1200px] mx-auto h-screen flex text-white">
        <div className="w-1/2 px-4 py-3 flex flex-col items-end justify-end">
          <div className="w-full pb-3 font-bold text-5xl self-end border-b-[5px]">
            <span >{text}</span>
            <Cursor cursorColor='gray' />
          </div>
          <h1 className="mt-3 font-bold text-5xl h-1/2 text-blue-400">"Be a Learnifier"</h1>
        </div>

        <div className="w-1/2 flex justify-start items-center">
          {/* <Lottie animationData={boyStudying} className="-mt-10 tablet:w-[500px]" loop={true} />
          <Lottie animationData={rocket} className="-mt-10 absolute left-1/2 -translate-x-1/2 bottom-[60%] tablet:w-[250px] -z-10 rotate-[30deg]" loop={true} /> */}
        </div>
      </section>

      <section id="carousel" className="text-white snap-center h-screen w-full max-w-[1200px] mx-auto px-4 py-2 flex flex-col justify-center">
        <div className="mt-12 rounded-xl">
          <h1 className="text-4xl tracking-wider font-bold"><span className="text-blue-400">#Featured</span> courses</h1>
          <p className="text-sm tracking-wider mt-2 pb-2 border-b-[3px] border-gray-400 border-dashed">Experice learning like never before by experiencing our curated choice of courses</p>
          <ImageSlider />
        </div>

        <div className="mt-7 font-bold rounded-lg grid grid-cols-3 gap-5">
          <Link to='#'> <div className="col-span-1 px-3 py-2 text-xl h-[150px] bg-red-400 rounded-md flex items-end">Learn</div> </Link>
          <Link to='#'> <div className="col-span-1 px-3 py-2 text-xl h-[150px] bg-blue-400 rounded-md flex items-end">Practice</div> </Link>
          <Link to='#'> <div className="col-span-1 px-3 py-2 text-xl h-[150px] bg-green-400 rounded-md flex items-end">Challenges</div> </Link>
        </div>
      </section>

      <section id="trending courses" className="snap-center w-full h-screen">
        {/* trending courses */}
        <iframe src="https://chat.openai.com/" width="100%" height="100%" frameborder="0"></iframe>
      </section>
    </div>
  )
}

export default Home