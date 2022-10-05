import React, { useState } from 'react';
import {BsPerson} from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';
const NavBar2 = () => {
    const [ Nav, setNav ]= useState(false);
    
  return (
      <div className="absolute z-30 flex justify-between items-center h-20 px-4 w-screen">
          {/*Desktop view*/}
          <div >
              <h1>CERIUM.</h1>
          </div>
          <ul className="hidden md:flex">
              <li >Home</li>
              <li >Dinning</li>
              <li >Kitchen</li>
              <li >Artist</li>
              <li >BedRoom</li>
          </ul>
          <div className="hidden md:flex text-white px-2 mx-2 ">
              <BiSearch  className="icon" size={20}/>
              <BsPerson  className="icon" size={20}/>
          </div>
          
          {/*Hamburger Menu*/}
          
          <div onClick={()=>setNav(!Nav)} className="md:hidden z-10 cursor-pointer text-white">
              {Nav ? <AiOutlineClose onClick={()=>setNav(!Nav)} size={20} /> : <HiOutlineMenuAlt4 onClick={()=>setNav(!Nav)} size={20}/>}
          </div>
          
          
          {/*Mobile View*/} 


          <div onClick={()=>setNav(!Nav)} className={Nav ? "absolute left-0 top-0 w-full bg-gradient-to-r from-[#0d2138b9] to-[#2294b6b2] px-4 py-7 flex flex-col z-10" : "absolute left-[-100%] top-0 w-full bg-gray-500/70 px-4 py-7 flex flex-col z-10"}>
               <ul className="md:hidden z-20">
              
              <li >Home</li>
              <li >Dinning</li>
              <li >Kitchen</li>
              <li >Artist</li>
              <li >BedRoom</li>
                  <div className="flex flex-col w-full">
                      <button className="flex flex-col w-full p-3 border bg-gradient-to-r from-[#15d4c4] to-[#102233f3] text-white rounded-md mb-4">Search</button>
                      <button className="flex flex-col w-full p-3 border bg-gradient-to-r from-[#4de7dafd] to-[#162d42f8] text-white rounded-md">Account</button>
                  </div>
                  <div className="flex justify-between my-6">
                      <FaFacebook  className="icon "/>
                      <FaTwitter  className="icon "/>
                      <FaInstagram  className="icon "/>
                      <FaPinterest  className="icon "/>
                      <FaYoutube className="icon "/>
                  </div>
          </ul>
          </div>


    </div>
  )
}

export default NavBar2