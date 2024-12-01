import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TopItem from './Components/Foods/TopItem';

import Aos from 'aos';
import "aos/dist/aos.css";
import Drink from './Components/Foods/Drink';


const App = () => {
  React.useEffect(()=>{
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
  });
 
 
  Aos.refresh();
},[]);
  return (
    <div>
      <Navbar />
      <Hero/>
      <TopItem />
      <Drink/>
    
    </div>
  )
}

export default App
