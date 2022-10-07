import React,{useState} from 'react';
import {data} from "../data/data.js";
import {MdChevronRight,MdChevronLeft} from "react-icons/md";
import Card from './Card';
const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };


const Selects= () => {
    const [items,setItems]=useState(data);
  return (
    <div className="max-w-[1640px] px-4 m-auto py-12">
       <h2 className='text-white font-bold md:text-xl p-4'>{items.title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {items.map((item, id) => (
            
            <Card item={item} key={id}/>
            
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </div>
  )
}

export default Selects;