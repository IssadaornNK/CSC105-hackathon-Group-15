import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Logo from '../assets/LogoKitsuNe_P.png';
import { Link } from 'react-router-dom';
import ContactModal from "./ContactModal";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const [showMyModal, setShowMyModal] = useState(false)
  const handleOnClose = () => setShowMyModal(false)
  
  function logout(){
    document.cookie = "token=;max-age=0";   
    location.href = "/login"
  }

  return (
    <div className='fixed w-full h-[80px] flex top-0 justify-between items-center px-4 bg-[#fff]
     text-black font-bold shadow-md shadow-gray-400'>
      <div>
        <Link to="/">
          <img src={Logo} alt='Logo Image' style={{ width: '150px' }} />
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex text-lg'>
        <li className='hover:text-orange-400'>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className='hover:text-orange-400'>
          <Link to='/AboutPage'>
            About
          </Link>
        </li>
        <li className='hover:text-orange-400'>
          <Link to='/ProjectPage'>
            Project
          </Link>
        </li>
        <li className='hover:text-orange-400'>
          <button onClick={() => setShowMyModal(true)}>
            Contact
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:text-orange-400'>
        {!nav ? <FaBars size={"25px"} /> : <FaTimes size={"25px"}/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'fixed top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center origin-bottom duration-500 transform translate-y-0 opacity-100'
        }
      >
        <li className='py-6 text-4xl hover:text-orange-400'>
          {' '}
          <Link onClick={handleClick} to='/'>
            Home
          </Link>
        </li>

        

        <li className='py-6 text-4xl hover:text-orange-400'>
          {' '}
          <Link onClick={handleClick} to='/AboutPage'>
            About
          </Link>
        </li>



        <li className='py-6 text-4xl hover:text-orange-400'>
          {' '}
          <Link onClick={handleClick} to='/ProjectPage'>
            Projects
          </Link>
        </li>



        <li className='py-6 text-4xl hover:text-orange-400'>
          {' '}
          <button onClick={() => setShowMyModal(true)}>
            Contact
          </button>
        </li>

        <li className='py-6 text-4xl text-red-600 hover:text-red-800'>
          {' '}
          <button onClick={logout}>
            Logout
          </button>
        </li>


      </ul>
      <ContactModal onClose={handleOnClose} visible={showMyModal}/>
    </div>
  );
};

export default Navbar;