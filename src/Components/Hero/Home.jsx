import React from 'react';
import Hero from './Hero';
import AllReceipe from '../AllReceipe';
import ContactUs from '../Navbar/ContactUs';


const Home = () => {
  return (
    <div>
        <Hero/>
        <AllReceipe/>
        <ContactUs/>
    </div>
  )
}

export default Home