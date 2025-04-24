import React from 'react';
import './App.css';
import Navigation from './Navigation';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footeri from './Footeri';

function App() {
  return (
    <div>
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/" element={<About />} />
        <Route path="/Contact/" element={<Contact />} />
      </Routes>
      <Footeri />
    </div>
    
  );
}

export default App;
