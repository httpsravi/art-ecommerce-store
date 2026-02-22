import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'  

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4'>
      <img src={assets.logo} className='w-36' alt='Logo' /> 

      <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
        <NavLink to='/home' className=' flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-4 border-t-2 border-black hidden group-[.active]:block'></hr>
        </NavLink>

        <NavLink to='/collection' className=' flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-4 border-t-2 border-black hidden group-[.active]:block'></hr>
        </NavLink>

        <NavLink to='/about' className=' flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-4 border-t-2 border-black hidden group-[.active]:block'></hr>
        </NavLink>

        <NavLink to='/contact' className=' flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-4 border-t-2 border-black hidden group-[.active]:block'></hr>
        </NavLink>

      </ul>

    </div>
  )
}

export default Navbar