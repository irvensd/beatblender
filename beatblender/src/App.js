import React from 'react';
import './App.css';
// import router 
import { Routes, Route } from "react-router-dom";
// import components
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Login from './routes/Login';


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>


</div>
  );
}

export default App;
