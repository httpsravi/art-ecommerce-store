import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'  

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className='flex items-center justify-between py-4 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-b border-gray-200'>
      <img src={assets.logo} className='h-10' alt='Logo' /> 

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
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt='' className='w-5 cursor-pointer' />

        <div className='group relative'>
          <img src ={assets.profile_icon} alt='' className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute drop-down right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'> 
              <p className='cursor-pointer hover:text-black'> my Profile</p>
              <p className='cursor-pointer hover:text-black'> orders</p>
              <p className='cursor-pointer hover:text-black'> Logout </p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} alt='' className='w-5 cursor-pointer' />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'> 3 </p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt='' className='w-5 cursor-pointer sm:hidden' />

        {/* sidebar menu for small screens */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0' }`}>
            <div className='flex flex-col text-gray-600'>
              <div onClick={()=>setVisible(false)} className='flex items-center p-3 gap-4 cursor-pointer'> 
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=''></img>
                <p>Back</p>
              </div>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/'> HOME </NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/collection'> COLLECTION </NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/about'> ABOUT </NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/contact'> CONTACT </NavLink>
            </div>
          </div>
  
        

      </div>

    </div>
  )
}

export default Navbar