import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="w-full bg-gray-400 py-16">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4">
                <div className="sm:flex text-center justify-between items-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#97f7f2fd] pb-4 mb-4">Mukuchu</h1>
                    <div className="flex justify-between w-full sm:max-w-[200px] my-4">
                        <FaFacebook className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                        
                    </div>
                </div>
                <div className="flex justify-between">
                    <ul className="lg:flex">
                        <li className="p-4 font-bold text-[#f7cd5ad3];">About</li>
                        <li className="p-4 font-bold text-[#f7cd5ad3];">Partnership</li>
                        <li className="p-4 font-bold text-[#f7cd5ad3];">Careers</li>
                        <li className="p-4 font-bold text-[#f7cd5ad3];">NewsRoom</li>
                        <li className="p-4 font-bold text-[#f7cd5ad3];">Advertising</li>
                    </ul>
                    <ul className="text-right lg:flex"> 
                        <li className="p-4 font-bold text-[#f7cd5ad3]">Town Homes</li>
              <li className="p-4 font-bold text-[#f7cd5ad3]">Bungalows</li>
              <li className="p-4 font-bold text-[#f7cd5ad3]">Pent-House</li>
              <li className="p-4 font-bold text-[#f7cd5ad3]">Villas</li>
              <li className="p-4 font-bold text-[#f7cd5ad3]">Plazas</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;