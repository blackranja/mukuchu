import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {GiSpookyHouse,GiFamilyHouse,GiSydneyOperaHouse,GiVikingLonghouse } from 'react-icons/gi';
import {MdMapsHomeWork} from 'react-icons/md';
const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto bg-[#08080800] flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Muku<span className='font-bold'>chu</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Estates</p>
          <p className='p-2'>Rentals</p>
        </div>
      </div>

      {/* Search Input */}
      <div className='bg-[#00000085] rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search Property'
        />
      </div>
      {/* Cart button */}
      <button className='bg-[#3b3939c9] text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Order
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Muku<span className='font-bold'>Chu</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><MdMapsHomeWork size={25} className='mr-4' />Rentals</li>
                <li className='text-xl py-4 flex'><GiFamilyHouse size={25} className='mr-4' />Plazas</li>
                <li className='text-xl py-4 flex'><GiSpookyHouse size={25} className="mr-4"/> Villas</li>
                <li className='text-xl py-4 flex'><GiSydneyOperaHouse size={25} className='mr-4' />Pent Houses</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><GiVikingLonghouse size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Contact Support</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;