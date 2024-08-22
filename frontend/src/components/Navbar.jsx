
{/*
export default function Navbar() {
    return(
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-extrabold">
                    D2C Dashboard
                </div>
            {/*
                <ul className="flex space-x-4">
                    <li className="text-white hover:text-gray-400">
                        <a href="#home">Home</a>
                    </li>
                    <li className="text-white hover:text-gray-400">
                        <a href="#explore">Explore</a>
                    </li>
                    <li className="text-white hover:text-gray-400">
                        <a href="#insights">Insights</a>
                    </li>
                </ul>  
                <div className="flex items-center space-x-3">
                    <span className="text-white font-bold">John Doe</span>
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </nav>
    )
}

*/}

import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Navbar({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right flex'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Navbar