import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

import Search from './Search';
import Selects from './Selects';
import Carousel from './Carousel';
import Footer from './Footer';
import Items from './Items';
const Home1 = () => {
  return (
<>
      <Navbar/>
      <Hero/>
      <Items/>
      <Selects />
      
      <Carousel />
      <Footer/>
</>
  )
}

export default Home1