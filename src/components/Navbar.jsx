import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown';
import Profile from './Profile';

function Navbar() {
    const nav = useNavigate();

    async function LogOut() {
        const cooki = document.cookie;
        console.log("cookie", cooki)
        const arr = save.split("=");
        console.log(arr)
        document.cookie = `${arr[0]}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        nav("/login");
    }


    return (
        <div className="bg-[rgb(19,24,32)] z-20 fixed top-0 text-white w-full text-lg font-bold font-montserrat px-4 py-3 flex justify-between items-center">
            <Link to='/'>
                {/* <img className="w-48 object-cover filter contrast-125 cursor-pointer" src={brandLogo} alt="brandlogo" /> */}
                <h1 className="uppercase tracking-[7px]">Learnify</h1>
            </Link>

            <div className="flex items-center flex-grow justify-end">
                <ul className="flex gap-2 items-center px-3 py-1 mr-4 border-r-[3px] border-gray-500">
                    <Dropdown />
                    <li><Link to="/home" className="w-32 ml-[1px] bg-gray-700 text-base px-3 py-[7.5px] rounded-full hover:bg-blue-500 transition ease-in-out"><button className="w-20">Learn</button></Link></li>
                    <li><Link to="/practice" className="w-32 bg-gray-700 text-base px-3 py-[7.5px] rounded-full hover:bg-blue-500 transition ease-in-out"><button className="w-20">Practice</button></Link></li>
                </ul>

                {/* <button className="px-4 py-2 text-white rounded-md text-base bg-gray-600/40 hover:bg-blue-500 transition-all ease-in-out duration-200" onClick={LogOut}>Log out</button> */}
                <Profile />
            </div>
        </div>
    )
}

export default Navbar