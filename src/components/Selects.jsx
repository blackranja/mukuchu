import React,{useState} from 'react';
import {data} from "../data/data.js";
import {data2} from "../data/data2.js";
import {data3} from "../data/data3.js";
import {data4} from "../data/data4.js";
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
    const [itemss,setItemss]=useState(data2);
    const [itemsss,setItemsss]=useState(data3);
    const [itemssss,setItemssss]=useState(data4);
  return (
    <div className="max-w-[1640px] px-4 m-auto py-12">
       <h2 className='text-[#000000] font-bold md:text-xl p-4'>Modern Houses</h2>
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
      <h2 className='text-[#000000] font-bold md:text-xl p-4'>Town Houses</h2>
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
          {itemss.map((item, id) => (
            
            <Card item={item} key={id}/>
            
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
      <h2 className='text-[#000000] font-bold md:text-xl p-4'>Estate Houses</h2>
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
          {itemsss.map((item, id) => (
            
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