import React from "react";
import './index.css'
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home'
import Projects from './Routes/Projects'
import About from './Routes/About'


function App() {
  return (
    <div className="body" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
