import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

import Search from './Search';
import Selects from './Selects';
import Carousel from './Carousel';
import Footer from './Footer';
const Home1 = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    
      <Search />
      <Selects />
      <Carousel />
      <Footer/>
    </div>
  )
}

export default Home1