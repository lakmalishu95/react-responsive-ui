import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

import './App.css';




const App = () => {
  return (
    <>
    <div className="Navbar">
        <Navbar />    
    </div>  
    <div>
      <Hero />
    </div>
    
    </>
   
    
  );
}



export default App;

