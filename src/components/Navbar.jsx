import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between px-14 p-4 text-lg bg-slate-400 w-full ">
            <div className="  text-center  md:text-center  font-bold ">Weather Application</div>
            <ul className="hidden md:flex space-x-4 gap-32 font-medium">
                <NavLink to="/Home"><li className=" transform hover:scale-125 transition-transform duration-300 cursor-pointer">Home</li></NavLink>
                <NavLink to="/About"><li className=" transform hover:scale-125 transition-transform duration-300 cursor-pointer">About</li></NavLink>
                <NavLink to="/Contact"><li className=" transform hover:scale-125 transition-transform duration-300 cursor-pointer">Contact</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar