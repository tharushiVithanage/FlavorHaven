import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TopItem from './Components/Foods/TopItem';
import Drink from './Components/Foods/Drink';
import Desert from './Components/Foods/Desert';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Navbar/ContactUs';
import Login from './Components/login/Login';
import All from './Components/AllReceipe';
import Home from './Components/Hero/Home'; // Keep only one import for Home

import AddRecepie from './Components/Recepeice/AddRecepie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} /> {/* Add route for Login */}
          <Route path="/TopItem" element={<TopItem />} />
          <Route path="/Drink" element={<Drink />} />
          <Route path="/Desert" element={<Desert />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/All" element={<All />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddRecepie" element={<AddRecepie />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
