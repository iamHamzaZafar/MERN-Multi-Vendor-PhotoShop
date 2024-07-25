import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 px-5 fixed top-0 right-0 left-0 shadow-md gap-1 sm:gap-0 z-30 '>
      <div className='flex justify-between items-center '>
        <Link to={"/"} className='font-bold text-3xl ' >
          Pic Prism
        </Link>
      </div>
      <ul className=' flex gap-5 text-lg font-semibold text-gray-400 '>
        <Link to={'/'}  className='hover:text-black pointer sm-p-2'>About</Link>
        <Link to={"/"}  className='hover:text-black pointer sm-p-2'>Contact </Link>
        <Link to={"/login"}  className='hover:text-black pointer sm-p-2'>Login</Link>
        <Link to={"/signup"}  className='hover:text-black pointer sm-p-2'>Signup</Link>
      </ul>
    </nav>
  )
}

export default Navbar