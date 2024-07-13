import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', to: "/" },
    { id: 2, text: 'Contact', to: "/contact-us" },
    { id: 3, text: 'About', to: "/about-us" },
    {id: 4, text: 'Sign In', to: "/sign-in"},
    {id: 5, text: 'Top Contributors', to: "/top-contributors"}
  ];
  const {currentUser}=useSelector(state=>state.user)
  return (
    <div className='bg-black flex justify-between items-center h-24 w-screen mx-auto px-4 text-white'>
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex gap-x-12">
          <h1 className='hidden md:block w-full text-3xl font-bold text-[#E85D04]'>Avighna</h1>
          <img src={logo} className="h-12 w-12 rounded-full" alt="Avighna" />
        </div>
      </Link>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link key={item.id} to={item.to}>
            <li 
              className={`py-2 px-4 hover:text-[#FFBA08] rounded-xl mx-2 cursor-pointer duration-300 ${
                item.id !== 4 || (item.id === 4 && !currentUser) 
                  ? (item.id === 4 
                    ? 'bg-yellow-400 rounded-lg hover:text-black' 
                    : '')
                  : 'hidden'
              }`}
            >
              {item.text}
            </li>
          </Link>
        ))}
       {currentUser && <Link to={"/profile"}><img src={currentUser.profilePicture} className='w-10 h-10 rounded-full' alt="" /></Link>}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] z-50 h-auto border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <Link to={"/"}>
          <h1 className='w-full text-3xl font-bold text-[#E85D04] m-4'>Avighna</h1>
        </Link>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link key={item.id} to={item.to}>
            <li
              className={'p-4 rounded-xl hover:bg-[#FFBA08] duration-300 hover:text-black cursor-pointer border-gray-600 '}
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
      
    </div>
  );
};

export default Navbar;


<button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
        Sign in
      </button>