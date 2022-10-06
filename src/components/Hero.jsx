import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
//import video from './src/videos/video1.mp4';

const Hero = () => {
  return (
      <div className="w-full h-screen relative">
          <video className="w-full h-full object-cover" src="https://player.vimeo.com/external/661679799.sd.mp4?s=ee612da8231baa606ca108e6be64d003bca56513&profile_id=164&oauth_token_id=57447761" autoPlay loop muted/>
         <div className="absolute w-full h-full top-0 bg-gradient-to-r from-[#162e5281] to-[#13363677]"></div>
         <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
             <h1 className="text-3xl md:text-4xl font-bold text-white pb-4 mb-4">Real To The Taste </h1>
             <h2 className="text-2xl md:text-3xl font-bold text-[#6d6d70] pb-4">Show Case All Property Types</h2>
             <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/30">
                 <div>
                      <input
                          className="bg-transparent w-[300px] focus:outline-none sm:w-[400px] " 
                          type="text"
                          placeholder="Search Estates" />
                  </div>
                  <div>
                      <button><AiOutlineSearch size={20} className="text-2xl cursor-pointer text-[#f3b838] rounded-full justify-between bg-[#1f4b2359]"/></button>
                      </div>
              </form>
          </div>
                  
    </div>
  )
}

export default Hero